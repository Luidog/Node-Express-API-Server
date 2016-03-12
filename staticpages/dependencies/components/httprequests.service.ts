import {Http, Headers, Response} from 'angular2/http';
import { Injectable } from 'angular2/core';


@Injectable()
export class httpRequests{
    data: string
    loading: boolean

    constructor(public http: Http){
        console.log("Data Service Loaded")
    }
    sendRequest(values: any): void {
        let newRequest: string = this.toURLEncodedString(values)
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:3000/api/heroes', newRequest, { headers: headers })
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
    toURLEncodedString(obj: any): string{
    let parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}

}