import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IspPackageService } from 'src/app/services/page/ispPackage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-isp-package-create',
  templateUrl: './isp-package-create.component.html',
  styleUrls: ['./isp-package-create.component.css']
})
export class IspPackageCreateComponent {
  savePackageForm: FormGroup;
  
 
  constructor(
    private fb: FormBuilder, 
    private ispPackageService: IspPackageService,
    private router : Router,
    ) {    
    this.savePackageForm = this.fb.group({
      packageName: ['', Validators.required],
      packageType: ['', Validators.required],
      packagePrice: ['', Validators.required],
      packageDuration: ['', Validators.required],      
    });
  }

  onSubmit() {
    if (this.savePackageForm.valid) {

      this.ispPackageService.saveIspPackages(this.savePackageForm).subscribe(
        {
          next : data => {
            console.log(data);
            this.router.navigate(['/dashboard', 'packages']);
          },
        }
      )
      console.log(this.savePackageForm.value);
    }
  }
  
}
