import { Deal } from "./deal";

export class Review {

    reviewId: number | undefined;
    dealRating: number | undefined;
    description: string | undefined;

    deal: Deal | undefined;

    constructor(reviewId?: number, dealRating?: number, description?: string) {
        this.reviewId = reviewId;
        this.dealRating = dealRating;
        this.description = description;
    }

}
