import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User = {
    id: 1,
    firstName: 'Taison',
    lastName: 'Eady',
    email: 'taison.eady@rjeglobal.com',
    mobile: '0448709995',
    group: 'admin',
  } ;

  constructor() { }

  ngOnInit() {
  }

}
