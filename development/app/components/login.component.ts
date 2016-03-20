import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { contentHeaders } from '../common/headers';


@Component({
  selector: 'login'
})
@View({
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
  <div>
    <h1>Login</h1>
    <div style="width: 500px">
      <form class="ui form" role="form" (submit)="login($event, username.value, password.value)">
        <div style="padding-bottom: 10px">
          <div style="width: 500px" class="field ui input">
            <label for="username">Username</label>
            <input type="text" #username  id="username" placeholder="Username">
          </div>
          <div style="width: 500px" class="field ui input">
            <label for="password">Password</label>
            <input type="password" #password class="form-control" id="password" placeholder="Password">
          </div>
        <button type="submit" class="ui button active" >Submit</button>
        </div>
      </form>
    </div>
  </div>
  `
})
export class LoginComponent {
  constructor(public router: Router, public http: Http) {
  }

  login(event, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ email, password });
    this.http.post('http://localhost:3000/auth/local', body, { headers: contentHeaders })
      .subscribe(
      response => {
        localStorage.setItem('jwt', response.json().id_token);
        this.router.parent.navigateByUrl('/Home');
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}