import { httpService } from 'static/services/httpService.service.ts'
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'hero-form',
    providers: [httpService],
    template: `
    <div>
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
  </div>
`
})

export class HeroForm {
    data: string
    loading: boolean

    constructor(private _httpService: httpService) {
    }

    makeRequest(values: any): string {
        let data = this._httpService.sendRequest(values)
        this.loading = true
        return this.data

    }
}