import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Roles } from 'src/app/models/page/roles';
import { RoleService } from 'src/app/services/page/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent {
  roles: Roles[] = [];
  displayedColumns: string[] = ['roleId','roleName']
  dataSource = new MatTableDataSource<Roles>;
  dashboard: string | any[] | null | undefined;
  constructor(
    private roleSvc: RoleService
  ){}

  ngOnInit(): void{
    this.roleSvc.getRole().subscribe(x=>{
      this.roles = x;
      this.dataSource.data = this.roles;
    } )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
