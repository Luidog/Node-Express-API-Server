/// <reference path="../../../configuration/es6-shim.d.ts" />

import { HeroService } from '../services/HeroService.service';
import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

import { Hero } from '../datatypes/hero.datatype';

@Component({
    selector: 'hero-form',
    providers: [HeroService],
    template: `
    <div style="padding-top: 30px">
        <h1>Add A Hero</h1>
        <div style="width: 500px">
            <form class="ui form" #f='ngForm' (ngSubmit)="makeRequest(f.value)">
                <div style="padding-bottom: 10px">
                    <div style="width: 500px" class="field ui input">
                        <label>First Name</label>
                        <input  type="text" placeholder="First Name" ngControl="firstName">
                    </div>
                    <div style="width: 500px" class="field ui input">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" ngControl="lastName">
                    </div>
                    <div style="width: 500px" class="field ui input">
                        <label>Hero Name</label>
                        <input type="text" placeholder="Hero Name" ngControl="heroName">
                    </div>
                </div>
                <button  class="ui button active" type="submit">Submit</button>
            </form>
        </div>
      <div *ngIf="hero">
          <pre>{{ hero | json}}</pre>
      </div>
  </div>
`
})

export class HeroForm {
    hero: Hero;

    constructor(private _heroService: HeroService) {
    }

    makeRequest(values: any): void {
        this._heroService.addAHero(values)
            .subscribe(res => this.hero = res)

    }
}