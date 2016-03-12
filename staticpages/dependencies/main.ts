/*
 * Angular
 */
import { bootstrap } from 'angular2/platform/browser';
import { provide, Component} from 'angular2/core';
import { HeroForm } from 'static/components/HeroForm.component.ts';
import { HeroList } from 'static/components/HeroList.component.ts';
import { HomeComponent } from 'static/components/Home.component.ts';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, HashLocationStrategy, LocationStrategy, } from 'angular2/router';

@Component({
    selector: 'hero-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
  <div>
    <nav class="ui three item menu">
        <a class="item" [routerLink]="['/Home']">Home</a>
        <a class="item" [routerLink]="['/HeroList']">Hero List</a>
        <a class="item" [routerLink]="['/HeroForm']">Add A Hero</a>
    </nav>

    <router-outlet></router-outlet>
  </div>
  `
})

@RouteConfig([
        
        { path: '/home', name: 'Home', component: HomeComponent },
        { path: '/heroform', name: 'HeroForm', component: HeroForm },
        { path: '/herolist', name: 'HeroList', component: HeroList },
        { path: '/', name: 'root', redirectTo: ['/Home'] }
    ])
export class HeroApp {


    constructor() {
    }

}

bootstrap(HeroApp, [HTTP_PROVIDERS,ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);