///<reference path="../../../../node_modules/@types/gapi/index.d.ts"/>
import { Component, OnInit, NgZone } from '@angular/core';
import { User } from './login.interface';
import { AuthService } from '../../core/auth.service'
import { Router } from "@angular/router";
declare let gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  profile;
  username;
  user: User = {
    login: '',
    password: ''
  }

  constructor(private authService: AuthService,
              private router: Router,
              private zone: NgZone) {

  }

  onSubmit(formData){
      this.authService.login(formData);
      console.log(this.authService.isLoggedIn);
      console.log(formData.value);
      console.log(formData.controls);
      this.router.navigate(['chat'])
  }
    
  ngOnInit() {
    gapi.load('auth2', () => {
      let auth2 = gapi.auth2.init({
        client_id: '886894346654-eekbgqs2hps8v1tlj96u3m822f6gqmmb.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      });

      auth2.attachClickHandler(
        document.getElementById('google-custom-button'), {},
        this.onSuccess.bind(this),
        this.onFailure
      );
    });
  }

  onFailure (){}

  onSuccess (user): void {
    this.zone.run(() => {
      this.profile = user.getBasicProfile();
      console.log(this.profile);
      this.username = user.getBasicProfile().getName();
    });
  }
}