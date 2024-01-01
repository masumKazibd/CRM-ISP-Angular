import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CityModel } from 'src/app/models/page/city-model';
import { CityService } from 'src/app/services/page/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent {
  cities: CityModel[] = [];
  displayedColumns: string[] = ['cityId','cityName']
  dataSource = new MatTableDataSource<CityModel>;
  dashboard: string | any[] | null | undefined;
  constructor(
    private citySvc: CityService
  ) { }

  ngOnInit(): void{
    this.citySvc.getCity().subscribe(x => {
      this.cities = x;
      this.dataSource.data = this.cities;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
