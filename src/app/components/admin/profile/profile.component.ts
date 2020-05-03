import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserI } from 'src/app/shared/models/user.interface';
import { FileI } from 'src/app/shared/models/file.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public image: FileI;
  public currentImage = 'https://i.picsum.photos/id/946/150/150.jpg';

  public profileForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    email: new FormControl({value: '', disabled: true}, [Validators.required, Validators.email]),
    photoURL: new FormControl('', Validators.required)
  })

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.userData$.subscribe( user => {
      this.initValuesForm(user);
    })
  }

  private initValuesForm(user: UserI): void{
    if(user.photoURL){
      this.currentImage = user.photoURL;
    }
    this.profileForm.patchValue({
      displayName: user.displayName,
      email: user.email
    })
  }

  onSaveUser(user: UserI): void{
    // this.authSvc.saveUserProfile(user, this.image); 
    this.authSvc.preSaveUserProfile(user, this.image); 
  }

  handleImage(image: FileI): void{
    this.image = image;
  }

}
