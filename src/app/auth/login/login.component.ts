///<reference path="../../../../node_modules/@types/gapi/index.d.ts"/>
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { User } from './login.interface';
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserService } from "../users/user.service";

declare let gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {
  profile;

  private user: User = {
    login: '',
    password: ''
  };

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private zone: NgZone) {}
    
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

  ngOnDestroy(){
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  private onSubmit(formData: any){
     console.log(formData);
     
     const data = {
       pass: formData.password,
       username: formData.login
     };

     this.subscriptions.push(
       this.userService.login(data)
       .subscribe(this.onLoginSuccess.bind(this), this.onLoginError)
     )
  }

  private onLoginSuccess(res: any): void {
    console.log(res);
    this.userService.setUserState(res);
    this.router.navigate(['chat']);
  }

  private onLoginError(err: any): void {
    console.log(err);
    alert ('User not found');
  }

// Methods for google authorisation
  onFailure (){}

  onSuccess (user): void {
    this.zone.run(() => {
      this.profile = user.getBasicProfile();
      console.log(this.profile);
      this.userService.login(this.profile);
      this.router.navigate(['chat']);
    });
  }
}