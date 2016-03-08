import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'
import { FORM_DIRECTIVES } from 'angular2/common'
import { HTTP_PROVIDERS } from 'angular2/http'

@Component({
    selector: 'hello-world',
    directives: [FORM_DIRECTIVES],
    template: `
    	<div>
    	<h2> Hero Form </h2>
    	<form #f='ngForm' (ngSubmit)="onSubmit(f.value)">
    		<div>
    		    <label>First Name</label>
    			<input type="text" id="skuInput" placeholder="First Name" ngControl="firstName">
    			<label>Last Name</label>
    			<input type="text" id="skuInput" placeholder="Last Name" ngControl="lastName">
    			<label>Hero Name</label>
    			<input type="text" id="skuInput" placeholder="Hero Name" ngControl="heroName">
    		</div>
    		<button type="submit">Submit</button>
    	</form>
    	</div>
    `
})
export class AppComponent {

	onSubmit(value: any): void{
		console.log('you submitted value: ', value)
	}	
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);