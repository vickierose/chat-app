import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MyValidator } from '../../shared/validators';

@Component({
  selector: 'ct-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  
  ngOnInit() {

    this.user = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', [Validators.required, <any>Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
      passwords: this.fb.group ({
        password: ['', Validators.compose([Validators.required])],
        confirmPassword: ['', Validators.compose([Validators.required])]
      })
    });
  }

  onSubmit (user){
    console.log(user.value, user.valid, user.controls);
  }
}