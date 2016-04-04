/// <reference path="../../configuration/es6-shim.d.ts" />


/*
 * Angular
 */
import { HeroService } from './services/HeroService.service';
import { UserService } from './services/UserService.service';
import { bootstrap } from 'angular2/platform/browser';
import { provide, Component} from 'angular2/core';
import { HeroForm } from './components/HeroForm.component';
import { HeroDetail } from './components/HeroDetail.component';
import { HeroList } from './components/HeroList.component';
import { NothingHere } from './components/NothingHere.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { LoginBar } from './components/LoginBar.component';
import { SignUpComponent } from './components/SignUp.component';
import { UserPage } from './components/UserPage.component'
import { HTTP_PROVIDERS, Http } from 'angular2/http';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, HashLocationStrategy, LocationStrategy, } from 'angular2/router';
import { AuthHttp, AuthConfig, JwtHelper } from './services/angular2-jwt';
import { aConfig } from './common/AuthConfig.common';
import {enableProdMode} from 'angular2/core';
enableProdMode();

@Component({
    selector: 'hero-app',
    directives: [ROUTER_DIRECTIVES, LoginBar],
    template: `
    <div class="inner">  
        <div>      
            <nav class="ui three item menu">
                <a class="item" [routerLink]="['/Home']">Home</a>
                <a class="item" [routerLink]="['/Heroes']">Hero List</a>
                <a class="item" [routerLink]="['/AddAHero']">Add A Hero</a>
            </nav>
            <div>
                <div class="ui three column centered grid">
                    <router-outlet></router-outlet>
                </div>
            </div>           
        </div>
    </div>
    <div class="outer">
        <login-bar></login-bar> 
    </div>

  `,
  styles: [`
    .outer {
                overflow: hidden;
       position: relative;
    }

    .inner {
        position: relative;
        height: 100%;
        width: 100%;

    }
  `]
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
        { path: '/UserPage', name: 'UserPage', component: UserPage },
    ])
export class HeroApp {


    constructor(public userService: UserService) {
    }

}

bootstrap(HeroApp, [HTTP_PROVIDERS, UserService, ROUTER_PROVIDERS, provide(AuthHttp, {
    useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
            tokenName: 'RestServerWebToken'
        }), http);
    },
    deps: [Http]
}), provide(LocationStrategy, { useClass: HashLocationStrategy }), JwtHelper]);