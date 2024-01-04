import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { User } from 'src/app/models/page/user';
import { BillingService } from 'src/app/services/page/billing.service';
import { IspPackageService } from 'src/app/services/page/ispPackage.service';
import { UserService } from 'src/app/services/page/users.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  invoiceInfo?: string;
  invoiceForm: FormGroup;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2050, 11, 31);
  packageId?:  string;
  invoiceNo?: string;
  ispPackage: IspPackage = new IspPackage();
  
  paymentMethods = [
    {label: "Select One", value: null},
    {label: "Online", value: 'Online'},
    {label: "Cash", value: 'Cash'}
   ];
  userNames: User[] = [];
  constructor(
    private fb: FormBuilder, 
    private  packageService: IspPackageService,
    private billingService: BillingService,
    private userService: UserService,
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
    this.getMaxBillingId();
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.packageId = params['id'] as string;
      this.getIspPackageById(this.packageId);
    });
    this.invoiceForm.get('invoiceDate')?.setValue(new Date());

  }

  getUsers(){
    this.userService.getUsers().subscribe(x => {
      this.userNames = x;
    });
  }
  getIspPackageById(id: string){
    this.packageService.getIspPackageById(id).subscribe(x => {
      this.ispPackage = x;
      this.setIspPackage();
    });
  }
  getMaxBillingId(){
    this.billingService.getMaxBillingId().subscribe(x=>{
      this.invoiceNo = (parseInt(x.toString()) + 1).toString();
      this.invoiceForm.get('invoiceNo')?.setValue(this.invoiceNo);
    })
  }

  setIspPackage(){
    this.invoiceForm.get('packageName')?.setValue(this.ispPackage.packageName);
    this.invoiceForm.get('packageAmount')?.setValue(this.ispPackage.packagePrice);
  }

  onSubmit() {
    if (this.invoiceForm.valid) {
      console.log("Hello world!");
      this.invoiceInfo = this.invoiceForm.value;
      console.log(this.invoiceInfo)
  
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