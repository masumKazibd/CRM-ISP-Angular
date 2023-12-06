import { Component, ViewChild } from '@angular/core';
import { CityService } from '../../../services/city.service';
import { City } from '../../../models/city';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-city-index',
  templateUrl: './city-index.component.html',
  styleUrls: ['./city-index.component.css']
})
export class CityIndexComponent {
  citys: City[] = [];
  cityDataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['cityId', 'cityName'];
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private service: CityService) { }
  ngOnInit() {
    this.service.get().subscribe(x => {
      this.citys = x;
      console.log(this.citys);
      this.cityDataSource = new MatTableDataSource(this.citys);
      this.cityDataSource.paginator = this.paginator;
      console.log(this.cityDataSource)
    })
  }
}
