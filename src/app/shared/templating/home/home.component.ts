import { Component } from '@angular/core';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { IspPackageService } from 'src/app/services/page/ispPackage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  packages: IspPackage[] = [];

  constructor(
    private packSvc : IspPackageService
  ){}

  ngOnInit(): void {

    this.packSvc.getIspPackages().subscribe(x => {
      this.packages = x;
    });
  }

  company = {
    location: '123 Main St, Anytown, USA',
    about: 'We are a leading ISP company providing high speed internet services.'
  };

  createInvoice(packages: IspPackage){
    console.log(packages);
  }

  slides = ['assets/images/slides/slide1.jpg', 'assets/images/slides/slide2.jpg', 'assets/images/slides/slide3.jpg', 'assets/images/slides/slide4.jpg'];
}