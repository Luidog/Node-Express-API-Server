import { Http, Headers, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/Rx'; 
import { Hero } from '../datatypes/hero.datatype';


@Injectable()
export class HeroService {

    constructor(public http: Http) {
        console.log('Hero REST Service Created.', http)
    }

    addAHero(heroToAdd: Hero) {
        let newRequest: string = this._toURLEncodedString(heroToAdd)
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost:3000/api/heroes', newRequest, { headers: headers })
            .map((responseData) => {
              console.log(responseData.json())
                return responseData.json();
            })
    }


    getHeroes() {
        return this.http.get('http://localhost:3000/api/heroes')
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
                                        hero._id
                                    ));
                    });
                }
                return result;
            });
        }

       getHero(id: string){
           return this.http.get('http://localhost:3000/api/heroes/' + id)
             .map((responseData) => {
               return responseData.json();
             })
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