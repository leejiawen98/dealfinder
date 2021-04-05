import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from '../models/deal';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {

  deal: Deal;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.deal = JSON.parse(this.route.snapshot.paramMap.get("deal"));
    console.log(this.deal.dealName);

   }

  ngOnInit() {}

}
