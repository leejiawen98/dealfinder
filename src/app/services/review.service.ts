import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Review } from '../models/review';
import { CreateReviewReq } from '../models/create-review-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  baseUrl: string = "/api/Review";

  constructor(private httpClient: HttpClient) { }

  createNewReview(newReview: Review, dealId: number, customerId: number): Observable<Review> {
    let createNewReviewReq: CreateReviewReq = new CreateReviewReq(newReview, dealId, customerId);

    return this.httpClient.put<Review>(this.baseUrl, createNewReviewReq, httpOptions).pipe
      (
      catchError(this.handleError)
      );
  }

  getAllReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.baseUrl + "/retrieveAllReviews").pipe
      (
      catchError(this.handleError)
      );
  }

  retrieveReviewByDealId(dealid: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.baseUrl + "/retrieveReviewByReviewId/" + dealid).pipe
      (
      catchError(this.handleError)
      );
  }

  retrieveReviewByReviewId(reviewId: number): Observable<Review> {
    return this.httpClient.get<Review>(this.baseUrl + "/retrieveReviewByReviewId/" + reviewId).pipe
      (
      catchError(this.handleError)
      );
  }

  updateReview(reviewToUpdate: Review): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, reviewToUpdate, httpOptions).pipe
      (
      catchError(this.handleError)
      );
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + "/" + reviewId).pipe
      (
      catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
