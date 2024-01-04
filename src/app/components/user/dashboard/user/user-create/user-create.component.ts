import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Area } from 'src/app/models/page/area';
import { City } from 'src/app/models/page/city';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { User } from 'src/app/models/page/user';
import { AreaService } from 'src/app/services/page/area.service';
import { CityService } from 'src/app/services/page/city.service';
import { IspPackageService } from 'src/app/services/page/ispPackage.service';
import { UserService } from 'src/app/services/page/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  saveUserForm: FormGroup;
  userInfo?: User;
  cityInfo: City[]=[];
  ispPackages: IspPackage[]=[];
  areas: Area[] = [];

  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2050, 11, 31);


  constructor(
    private fb: FormBuilder, 
    private router : Router,

    private userService: UserService,
    private cityService: CityService,
    private ispPackageService: IspPackageService,
    private areaService: AreaService,
    ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date();   

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

  ngOnInit(){
    this.getCity()
    this.getIspPackages()
    this.getAreas()
  }

  getCity(){
    this.cityService.getCity().subscribe(x=>{
      this.cityInfo=x;
    })
  }
  getIspPackages(){
    this.ispPackageService.getIspPackages().subscribe(x=>{
      this.ispPackages=x;
    })
  }
  getAreas(){
    this.areaService.getArea().subscribe(x=>{
      this.areas=x;
    })
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
