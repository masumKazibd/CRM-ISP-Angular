import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/page/role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent {
  saveRoleForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private router: Router,

  ){
    this.saveRoleForm = this.fb.group({
      cityName: ['', Validators.required]
    })
  }

  onSubmit(){
    if (this.saveRoleForm.valid){
      this.roleService.saveRole
      (this.saveRoleForm).subscribe(
        {
        next:data => {
          console.log(data);
          this.router.navigate(['/dashboard', 'city'])
        }
      }
      )
      console.log(this.saveRoleForm.value);
    }
  }
}
