import { Component} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { UserService } from '../services/UserService.component'



@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [UserService],
  template: `
  <div style="padding-top: 30px">
    <h1>Sign Up</h1>
    <div style="width: 500px">
      <form class="ui form" role="form" (submit)="signup($event,firstName.value,lastName.value, username.value, email.value, password.value)">
        <div style="padding-bottom: 10px">
        <div style="width: 500px" class="field ui input">
            <label for="username">Username</label>
            <input type="text" #firstName  id="username" placeholder="First Name">
          </div>
          <div style="width: 500px" class="field ui input">
            <label for="username">Username</label>
            <input type="text" #lastName  id="username" placeholder="Last Name">
          </div>
          <div style="width: 500px" class="field ui input">
            <label for="username">Username</label>
            <input type="text" #username  id="username" placeholder="username">
          </div>
          <div style="width: 500px" class="field ui input">
            <label for="username">Email</label>
            <input type="text" #email  id="email" placeholder="Email">
          </div>
          <div style="width: 500px" class="field ui input">
            <label for="password">Password</label>
            <input type="password" #password class="form-control" id="password" placeholder="Password">
          </div>
        <button type="submit" class="ui button active">Submit</button>
        <button [routerLink]="['/Login']" class="ui button">Login</button>
        </div>
      </form>
    </div>
  </div>
  `
})
export class SignUpComponent {

  constructor(public router: Router, private _userService: UserService) {
  }

  signup(event, firstname, lastname, username, email, password) {
    event.preventDefault();
    this._userService.signUp(firstname, lastname, username, email, password)
  }

}