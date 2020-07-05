import { User } from './../entity/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  users: User;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

 goToUserForm(){
   this.route.navigate(['/user-form'])
 }
}
