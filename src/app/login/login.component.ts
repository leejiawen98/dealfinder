import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) 
  {
    this.customers = new Array();
  }

  ngOnInit() : void
  {
    this.customerService.getAllCustomers().subscribe(
      response => {
        this.customers = response;
      },
      error => {
        console.log('********* LoginComponent.ts: ' + error);
      }
    );
  }

}
