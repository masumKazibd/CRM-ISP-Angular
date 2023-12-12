import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  packages = [
    { name: '5 MBps', description: 'Description 1', price: '$10' },
    { name: '10 MBps', description: 'Description 2', price: '$20' },
    { name: '15 MBps', description: 'Description 2', price: '$20' },
  ];

  company = {
    location: '123 Main St, Anytown, USA',
    about: 'We are a leading ISP company providing high speed internet services.'
  };

  slides = ['assets/images/slides/slide1.jpg', 'assets/images/slides/slide2.jpg', 'assets/images/slides/slide3.jpg', 'assets/images/slides/slide4.jpg'];
}