import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { IspPackageService } from 'src/app/services/page/ispPackage.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  invoiceForm: FormGroup;
  minDate = new Date(1900, 0, 1); // January 1, 1900
  maxDate = new Date(2050, 11, 31); // December 31, 2050
  packageId?:  string;
  ispPackage: IspPackage = new IspPackage();
  constructor(
    private fb: FormBuilder, 
    private  packageService: IspPackageService,

    // private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
    ) {

    this.invoiceForm = this.fb.group({
      invoiceNo:        ['', Validators.required],
      userName:         ['', Validators.required],
      invoiceDate:      [''],
      packageName:      ['', Validators.required],
      packageAmount:    ['', Validators.required],
      paymentMethod:    [null],
    });
  }


  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.packageId = params['id'] as string;
      this.getIspPackageById(this.packageId);
    });
    this.invoiceForm.get('invoiceDate')?.setValue(new Date());
  }

  getIspPackageById(id: string){
    this.packageService.getIspPackageById(id).subscribe(x => {
      this.ispPackage = x;
      this.setIspPackage();
    });
  }

  setIspPackage(){
    this.invoiceForm.get('packageName')?.setValue(this.ispPackage.packageName);
    this.invoiceForm.get('packageAmount')?.setValue(this.ispPackage.packagePrice);
  }

  onSubmit() {
    if (this.invoiceForm.valid) {
      // this.userInfo = this.invoiceForm.value;
  
      // // Set the userCreateDate to the current date
      // // this.userInfo.userCreateDate = this.today;
  
      // // Save the user information
      // this.userService.saveUser(this.userInfo ? this.userInfo : new User).subscribe({
      //   next: data => {
      //     console.log(data);
      //     this.router.navigate(['/dashboard', 'user-list']);
      //   },
      // });
    }
  }
}