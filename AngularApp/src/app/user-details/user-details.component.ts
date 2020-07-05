import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './../Services/users.service';
import { User } from './../entity/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users: User[]
  id;
  constructor(private userService:UsersService, private route: Router, private avRoute: ActivatedRoute) {
    const idParam = 'id';
      if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
      }
   }

  ngOnInit(): void {
    this.userService.findUserById(this.id).subscribe(data => this.users=data)
  }

}
