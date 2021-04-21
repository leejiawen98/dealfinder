import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { NgForm } from '@angular/forms';
import { Deal } from '../models/deal';
import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { ToastController } from '@ionic/angular';
import { Customer } from '../models/customer';
@Component({
  selector: 'app-review-deal',
  templateUrl: './review-deal.page.html',
  styleUrls: ['./review-deal.page.scss'],
})
export class ReviewDealPage implements OnInit {

  deal: Deal;
  newReview: Review;
  customer: Customer;
  ratingValues : number[] = [1,2,3,4,5];
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private toastController: ToastController,
    private sessionService: SessionService,
    private reviewService: ReviewService) {
      this.deal = JSON.parse(this.route.snapshot.paramMap.get("deal"));
      this.newReview = new Review();
    }

  ngOnInit() {
    this.customer = this.sessionService.getCurrentCustomer();
    console.log(this.customer.id);
  }

  goBack() {
    this.router.navigateByUrl('/view-purchase-history');
  }

  createReview(createReviewForm: NgForm) {
    console.log(this.customer.id);
    if (createReviewForm.valid) {
      this.reviewService.createNewReview(this.newReview, this.deal.dealId, this.customer.id).subscribe(
        response => {
          this.successToast();
          this.goBack();
        }, error => {
          this.errorMessage = "Error Creating New Review!";
          console.log(error);
          this.errorToast();
        }
      )
    } else {
      this.errorMessage = "Create Review Form Inputs are not Valid!";
      console.log(createReviewForm.valid);
      this.errorToast();
    }
  }
  
  async successToast() {
    const toast = await this.toastController.create({
      message: "Successfully Created New Review!",
      duration: 2000
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      duration: 2000
    });
    toast.present();
  }
}
