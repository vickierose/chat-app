import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "./users/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService,
                private router: Router){}

    canActivate(){
        if (!this.userService.authenticated){
            this.router.navigate(['auth/login']);
            return false;
        }
        return true;
    }
}