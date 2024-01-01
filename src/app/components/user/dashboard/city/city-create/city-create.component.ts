import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/page/city.service';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent {
  saveCityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cityService: CityService,
    private router: Router,

  ){
    this.saveCityForm = this.fb.group({
      cityName: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.saveCityForm.valid){
      this.cityService.saveCity
      (this.saveCityForm).subscribe(
        {
        next:data => {
          console.log(data);
          this.router.navigate(['/dashboard', 'city'])
        }
      }
      )
      console.log(this.saveCityForm.value);
    }
  }
}
