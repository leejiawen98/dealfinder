import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from '../models/deal';

@Component({
  selector: 'app-view-deal',
  templateUrl: './view-deal.component.html',
  styleUrls: ['./view-deal.component.scss'],
})
export class ViewDealComponent implements OnInit {

  deal: Deal;
  
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.deal = JSON.parse(this.route.snapshot.paramMap.get("deal"));
    console.log(this.deal.dealName);
  }

  ngOnInit() {

  }

  purchaseDeal() {

    this.router.navigate(['/purchase' , {deal: JSON.stringify(this.deal)}]);

  }

}
