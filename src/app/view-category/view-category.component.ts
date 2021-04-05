import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { of } from 'rxjs';
import { Category } from '../models/category';
import { Deal } from '../models/deal';
import { LeafCategoryAndDeals } from '../models/LeafCategoryAndDeals';
import { CategoryService } from '../services/category.service';
import { DealService } from '../services/deal.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})

export class ViewCategoryComponent implements OnInit {

  category : Category;
  allLeafCategories: Category[];
  categoryId: number;
  leafCategories: Category[];
  allDeals: Deal[];
  dealArr = [];
  existData = [];

  catDeals: LeafCategoryAndDeals[];
  leaf: LeafCategoryAndDeals;
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService, private dealService: DealService) {
    this.categoryId = parseInt(this.route.snapshot.paramMap.get("categoryId"));
    console.log(this.categoryId);

    this.allLeafCategories = new Array();
    this.category = new Category;
    this.leafCategories = new Array();
    this.allDeals = [];
    this.existData = new Array();
    this.catDeals = new Array();
  }

  ngOnInit() {
    
    this.categoryService.retrieveCategoryByCategoryId(this.categoryId).subscribe(
			response => {
				this.category = response;
			},
			error => {
				console.log('********** ViewCategory.ts: ' + error);
			}
		);

    this.categoryService.retrieveAllLeafCategories().subscribe(
			response => {
				this.allLeafCategories = response;
			}, 
			error => {
				console.log('********** ViewCategory.ts: ' + error);
			},
      () => {
        for(var x = 0; x < this.allLeafCategories.length; x++) {
          if(this.allLeafCategories[x].parentCategory.categoryId == this.categoryId) {
            this.leafCategories.push(this.allLeafCategories[x]);
          }
        }
      }
		);
      this.dealService.getAllDeals().subscribe(
        response => {
          this.allDeals = response;
        },
        error => {
          console.log('********** ViewCategory.ts: ' + error);
        },
        () => { //Inefficient, think of another way
          for(var y = 0; y < this.leafCategories.length; y ++) {
            this.catDeals.push(new LeafCategoryAndDeals(this.leafCategories[y]));
            for(var z = 0; z < this.allDeals.length; z ++) {
              if(this.allDeals[z].category.categoryId == this.leafCategories[y].categoryId) {
                this.catDeals[y].dealsAvail.push(this.allDeals[z]);
                this.catDeals[y].existDeal = true;
              }
            }
          }
          console.log(this.catDeals);
        }
      )
  }

  goToDeal(index1, index2) {
     this.router.navigate(['/viewDeal' , {deal: JSON.stringify(this.catDeals[index1].dealsAvail[index2])}]);
  }

}
