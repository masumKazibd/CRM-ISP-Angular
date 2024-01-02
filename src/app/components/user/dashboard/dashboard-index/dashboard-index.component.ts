import { Component } from '@angular/core';
import { UserService } from 'src/app/services/page/users.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent {
  totalUser: string = '';
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.userService.getTotalUsers().subscribe(x => {
      this.totalUser = x.toString();
    });
  }
}
