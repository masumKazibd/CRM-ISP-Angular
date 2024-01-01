import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IspPackageService } from 'src/app/services/page/ispPackage.service';
import { IspPackage } from 'src/app/models/page/ispPackage';


@Component({
  selector: 'app-user-package-list',
  templateUrl: './user-package-list.component.html',
  styleUrls: ['./user-package-list.component.css']
})
export class UserPackageListComponent {
  packages: IspPackage[] = [];
  displayedColumns: string[] = ['packageId', 'packageName', 'packagePrice'];
  dataSource = new MatTableDataSource<IspPackage>;
  dashboard: string | any[] | null | undefined;
  constructor(
    private packSvc: IspPackageService
  ) { }

  ngOnInit(): void {

    this.packSvc.getIspPackages().subscribe(x => {
      this.packages = x;
      this.dataSource.data = this.packages;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}