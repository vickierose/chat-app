import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { UserService } from "../../auth/users/user.service";


@Component({
  selector: 'ct-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  private username: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.subscriptions.push(
      this.userService.getUserState()
      .subscribe(state => this.username = state.username)
    )
  }
  ngOnDestroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  private get isLoggedIn(): boolean {
    return this.userService.authenticated
  }

  private logOut () {
    this.userService.logout();this.router.navigate(['auth/login'])
  }

}