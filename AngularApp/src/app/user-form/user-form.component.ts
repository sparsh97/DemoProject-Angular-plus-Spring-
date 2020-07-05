import { User } from './../entity/User';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  users: User;
  constructor( private userService: UsersService, private route: Router) { 
    this.users=new User();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.saveUserDetail(this.users).subscribe(result=>this.goToUserList())
  }

  goToUserList(){
    this.route.navigate(['/user-list'])
  }
}
