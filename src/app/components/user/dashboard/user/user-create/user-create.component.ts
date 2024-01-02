import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/page/user';
import { UserService } from 'src/app/services/page/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  saveUserForm: FormGroup;
  userInfo?: User;
 
  minDate?: Date;
  maxDate?: Date;
  // today?: Date;


  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private router : Router,
    ) {
        // Set the minimum to January 1st 20 years ithe past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    // this.minDate = new Date(currentYear - 20, 0, 1);
    // this.maxDate = new Date(currentYear + 1, 11, 31);
    this.minDate = new Date();
    this.maxDate = new Date();    
    // this.today = new Date();
    this.saveUserForm = this.fb.group({
      userName:       ['', Validators.required],
      userEmail:      ['', Validators.required],
      userPassword:   ['',],
      userPhone:      ['', Validators.required],
      userGender:     ['', Validators.required],
      userImage:      [''],
      userCreateDate: [''],
      userAddress:    [''],
      cityId:         [''],
      areaId:         [''],
      packageId:      [''],
    });
  }


  onSubmit() {
    if (this.saveUserForm.valid) {
      this.userInfo = this.saveUserForm.value;
  
      // Set the userCreateDate to the current date
      // this.userInfo.userCreateDate = this.today;
  
      // Save the user information
      this.userService.saveUser(this.userInfo ? this.userInfo : new User).subscribe({
        next: data => {
          console.log(data);
          this.router.navigate(['/dashboard', 'user-list']);
        },
      });
    }
  }


  // onSubmit() {
  //   if (this.saveUserForm.valid) {
  //     this.userInfo = this.saveUserForm.value;
  //     this.userInfo?.userCreateDate?.setValue(this.today);
  //     // this.userInfo?.userCreateDate?.setDate(new Date().getDate());
  //     // this.userInfo?.setValue(this.today)
  //     // this.saveUserForm.post('userCreateDate').setValue(this.today);
  //     this.userService.saveUser(this.userInfo? this.userInfo: new User).subscribe(
  //       {
  //         next : data => {
  //           console.log(data);
  //           this.router.navigate(['/dashboard', 'user-list']);
  //         },
  //       }
  //     )
  //     // console.log(this.userInfo?.value);
  //   } 
  // }
}
