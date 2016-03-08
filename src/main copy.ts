import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
    selector: 'hello-world',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }

bootstrap(AppComponent);