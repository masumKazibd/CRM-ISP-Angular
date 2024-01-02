import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { City } from 'src/app/models/page/city';
import { CityService } from 'src/app/services/page/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent {
  cities: City[] = [];
  displayedColumns: string[] = ['cityId','cityName']
  dataSource = new MatTableDataSource<City>;
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
