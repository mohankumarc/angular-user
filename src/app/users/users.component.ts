import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDet } from '../mock-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //user = "Mohan Kumar"
  // user : User = {
  //   id : 1,
  //   name: "Mohan kumar"

  // }

  userDet  = UserDet;
  selectedUser: User;
onSelect(user: User): void {
  this.selectedUser = user;
}

  constructor() { }

  ngOnInit() {
  }

}
