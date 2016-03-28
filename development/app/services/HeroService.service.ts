import { Http, Headers, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/Rx'; 
import { Hero } from '../datatypes/hero.datatype';


@Injectable()
export class HeroService {
    baseurl: string

    constructor(public http: Http) {
        this.baseurl = 'http://localhost:3000/api/heroes/';
    }

    addAHero(heroToAdd: Hero) {
        let newRequest: string = this._toURLEncodedString(heroToAdd)
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.baseurl, newRequest, { headers: headers })
            .map((responseData) => {
                return responseData.json();
            })
    }


    getHeroes() {
        return this.http.get(this.baseurl)
            .map((responseData) => {
            return responseData.json();
        })
            .map( (heroes: Array<any>) => {
                let result: Array<Hero> = [];
                if (heroes){
                    heroes.forEach((hero) => {
                        result.push(
                                new Hero( 
                                        hero.firstName,
                                        hero.lastName,
                                        hero.heroName,
                                        hero._id,
                                        hero.powers
                                    ));
                    });
                }
                return result;
            });
        }

       getHero(id: string){
           return this.http.get(this.baseurl + id)
               .map(res =>  res.json())

       }

    private _toURLEncodedString(obj: any): string {
        let parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }
}