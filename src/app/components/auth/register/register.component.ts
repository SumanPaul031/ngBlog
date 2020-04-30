import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserI } from 'src/app/shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(form: UserI){
    this.authSvc.signUp(form).then(res => {
      console.log('Success', res);
      this.router.navigate(['/']);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
