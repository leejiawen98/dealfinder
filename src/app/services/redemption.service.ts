import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreateRedemptionReq } from '../models/create-redemption-req';
import { Redemption } from '../models/redemption';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RedemptionService {

  baseUrl: string = "/api/Redemption";

  constructor(private httpClient: HttpClient) { }

  createNewRedemption(customerId: number, redemption: Redemption, dealId: number): Observable<number>
  {	
    let createRedemptionReq: CreateRedemptionReq = new CreateRedemptionReq(customerId, redemption, dealId);
    console.log(createRedemptionReq);
    return this.httpClient.put<number>(this.baseUrl, createRedemptionReq, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveAllRedemptions(): Observable<Redemption[]>
  {		
    return this.httpClient.get<Redemption[]>(this.baseUrl + "/retrieveAllRedemptions").pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveRedemptionByCustomerId(customerId: number): Observable<Redemption[]>
  {
    return this.httpClient.get<Redemption[]>(this.baseUrl + "/retrieveRedemptionByCustomerId/" + customerId).pipe
    (
      catchError(this.handleError)
    );
  }

  updateRedemption(redemption: Redemption): Observable<any>
    {
      return this.httpClient.post<any>(this.baseUrl, redemption, httpOptions).pipe
      (
        catchError(this.handleError)
      );
    }

  retrieveRedemptionsByCustIdandBizId(customerId: number, bizId: number): Observable<Redemption[]>
  {
    return this.httpClient.get<Redemption[]>(this.baseUrl + "/retrieveRedemptionsByCustIdandBizId/" + customerId + "/" + bizId).pipe
    (
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse)
  {
    let errorMessage: string = "";
    
    if (error.error instanceof ErrorEvent) 
    {		
      errorMessage = "An unknown error has occurred: " + error.error;
    } 
    else 
    {		
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }
    
    console.error(errorMessage);
    
    return throwError(errorMessage);		
  }

}
