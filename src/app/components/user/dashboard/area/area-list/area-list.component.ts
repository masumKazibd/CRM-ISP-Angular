import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Area } from 'src/app/models/page/area';
import { AreaService } from 'src/app/services/page/area.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent {
  areas: Area[] = [];
  displayedColumns: string[] = ['areaId','areaName']
  dataSource = new MatTableDataSource<Area>;
  dashboard: string | any[] | null | undefined;
  constructor(
    private areaSvc: AreaService
  ){}

  ngOnInit(): void{
    this.areaSvc.getArea().subscribe(x=> {
      this.areas = x;
      this.dataSource.data = this.areas;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
