/// <reference path="../../configuration/es6-shim.d.ts" />

/*
 * Angular
 */
import { bootstrap } from 'angular2/platform/browser';
import { provide, Component} from 'angular2/core';
import { HeroForm } from './components/HeroForm.component';
import { HeroDetail } from './components/HeroDetail.component';
import { HeroList } from './components/HeroList.component';
import { NothingHere } from './components/NothingHere.component';
import { HomeComponent } from './components/Home.component';
import { LoginComponent } from './components/login.component';
import { LoginBar } from './components/LoginBar.component';
import { SignUpComponent } from './components/SignUp.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, HashLocationStrategy, LocationStrategy, } from 'angular2/router';

@Component({
    selector: 'hero-app',
    directives: [ROUTER_DIRECTIVES, LoginBar],
    template: `
    <login-bar></login-bar>
      <div>      
    <nav class="ui three item menu">
        <a class="item" [routerLink]="['/Home']">Home</a>
        <a class="item" [routerLink]="['/Heroes']">Hero List</a>
        <a class="item" [routerLink]="['/AddAHero']">Add A Hero</a>
    </nav>
    <div>
        <div  class="ui three column centered grid">
            <router-outlet></router-outlet>
        </div>
    </div>
  </div>
  `
})

@RouteConfig([
        { path: '/Home', name: 'Home', component: HomeComponent },
        { path: '/addahero', name: 'AddAHero', component: HeroForm },
        { path: '/heroes', name: 'Heroes', component: HeroList },
        { path: '/hero/:_id', name: 'HeroDetail', component: HeroDetail },
        { path: '/', name: 'root', redirectTo: ['/Home'] },
        { path: '/nothinghere', name: 'NothingHere', component: NothingHere },
        { path: '/Login', name: 'Login', component: LoginComponent },
        { path: '/SignUp', name: 'SignUp', component: SignUpComponent },
    ])
export class HeroApp {


    constructor() {
    }

}

bootstrap(HeroApp, [HTTP_PROVIDERS,ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);