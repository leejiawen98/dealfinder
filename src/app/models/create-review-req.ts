import { Review } from './review';

export class CreateReviewReq {

    newReview: Review;
    dealId: number;
    customerId: number;

    constructor(newReview?: Review, dealId?: number, customerId?: number) {
        this.newReview = newReview;
        this.dealId = dealId;
        this.customerId = customerId;
    }

}
