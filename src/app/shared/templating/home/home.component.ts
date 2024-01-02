import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
    private packSvc : IspPackageService,
    private router: Router
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

  createInvoice(data: any){
    this.router.navigate(['/dashboard','invoice', data])
  }

  slides = ['assets/images/slides/slide1.jpg', 'assets/images/slides/slide2.jpg', 'assets/images/slides/slide3.jpg', 'assets/images/slides/slide4.jpg'];
}