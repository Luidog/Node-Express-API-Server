/*
 * Angular
 */
import { bootstrap } from 'angular2/platform/browser'
import {Component} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import {Http, Headers, Response} from 'angular2/http';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
    selector: 'hero-form',
    directives: [FORM_DIRECTIVES],
    template: `
  <h2 class="ui header">Add A Hero</h2>
          <div style="width: 300px">
        <form class="ui form" #f='ngForm' (ngSubmit)="makeRequest(f.value)">
            <div style="padding-bottom: 10px">
                <div class="field ui input">
                    <label>First Name</label>
                    <input  type="text" id="skuInput" placeholder="First Name" ngControl="firstName">
                </div>
                <div class="field ui input">
                    <label>Last Name</label>
                    <input type="text" id="skuInput" placeholder="Last Name" ngControl="lastName">
                </div>
                <div class="field ui input">
                <label>Hero Name</label>
                <input type="text" id="skuInput" placeholder="Hero Name" ngControl="heroName">
                </div>
            </div>
            <button  class="ui button active" type="submit">Submit</button>
        </form>
        </div>
  <div *ngIf="loading">loading...</div>
  <pre>{{data | json}}</pre>
`
})
export class SimpleHTTPComponent {
    data: Object;

    constructor(public http: Http) {
    }

    makeRequest(formvalues: Object): void {

        let newRequest: string = toURLEncodedString(formvalues)
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        function toURLEncodedString(obj: any): string {
            var parts = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                }
            }
            return parts.join("&");
        }
        this.http.post('http://localhost:3000/api/heroes', newRequest, { headers: headers })
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    
    }
}

bootstrap(SimpleHTTPComponent, [HTTP_PROVIDERS]);