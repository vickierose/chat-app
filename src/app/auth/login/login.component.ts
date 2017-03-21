import { Component, OnInit } from '@angular/core';
import { User } from './login.interface';
import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  user: User = {
    login: '',
    password: ''
  }

  constructor(private authService: AuthService) {

  }

  onSubmit(formData){
      this.authService.login(formData)
    }
    
  ngOnInit() {

  }
}