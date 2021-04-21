import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {

  sessionService : SessionService;

  constructor() { 
    console.log(this.sessionService.getIsLogin());
  }

  ngOnInit() {}

}
