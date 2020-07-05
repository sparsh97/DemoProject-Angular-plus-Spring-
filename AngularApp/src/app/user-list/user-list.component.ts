import { UsersService } from './../Services/users.service';
import { User } from './../entity/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[];
  constructor( private userService: UsersService, private route: Router) { }

  ngOnInit(): void {
    this.userService.findUserDetails().subscribe(data=>{
      this.users=data;
    })
  }

  onClick(id){
    this.userService.findUserById(id).subscribe(data=>this.users=data);
    this.route.navigate(['']);
  }

}
