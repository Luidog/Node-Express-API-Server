import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { UserService } from '../services/UserService.service';




@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
  <div style="padding-top: 30px">
    <h1>Login</h1>
    <div style="width: 500px">
      <form class="ui form" role="form">
        <div style="padding-bottom: 10px">
          <div style="width: 500px" class="field ui input">
            <label for="username">Username</label>
            <input type="text" #username  id="username" placeholder="Username">
          </div>
          <div style="width: 500px" class="field ui input">
            <label for="password">Password</label>
            <input type="password" #password class="form-control" id="password" placeholder="Password">
          </div>
        <button type="submit" (click)="login($event, username.value, password.value)" class="ui button active">Submit</button>
        <button [routerLink]="['/SignUp']" class="ui button">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  `
})
export class LoginComponent {
  
  constructor(public router: Router, public _userService: UserService) {

  }

  login(event, email, password) {
    event.preventDefault();
    this._userService.login(email,password)
    return this.router.parent.navigate(['/Home']);
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}