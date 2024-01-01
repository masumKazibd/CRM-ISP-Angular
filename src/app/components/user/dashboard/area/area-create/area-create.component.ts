import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/services/page/area.service';

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.css']
})
export class AreaCreateComponent {
  saveAreaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private areaService: AreaService,
    private router: Router,
  ){
    this.saveAreaForm = this.fb.group({
      areaName: ['', Validators.required]
    })
  }
  onSubmit(){
    if(this.saveAreaForm.valid){
      this.areaService.saveArea(
        this.saveAreaForm).subscribe(
          {
            next: data => {
              console.log(data);
              this.router.navigate(['/dashboard', 'area']);
            }
          }
        )
    }
  }
}
