import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: UserI){
    this.authSvc.loginByEmail(form).then(res => {
      console.log('Success', res);
      this.router.navigate(['/']);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
