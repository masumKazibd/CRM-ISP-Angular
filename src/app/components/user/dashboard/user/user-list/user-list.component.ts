import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/page/user';
import { UserService } from 'src/app/services/page/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  displayedColumns: string[] = ['userId', 'userName', 'userEmail','userPhone', 'area'];
  dataSource = new MatTableDataSource<User>;
  dashboard: string | any[] | null | undefined;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(x => {
      this.users = x;
      this.dataSource.data = this.users;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
