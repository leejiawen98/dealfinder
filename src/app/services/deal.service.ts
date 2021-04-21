import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Deal } from '../models/deal';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DealService {

  baseUrl: string = "/api/Deal";

  constructor(private httpClient: HttpClient) { }

  getAllDeals(): Observable<Deal[]>
  {		
    return this.httpClient.get<Deal[]>(this.baseUrl + "/retrieveAllDeals").pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveDealByDealSerialNum(dealSerialNum: string): Observable<Deal>
  {
    return this.httpClient.get<Deal>(this.baseUrl + "/retrieveDealByDealSerialNum/" + dealSerialNum).pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveDealByDealId(dealId: number): Observable<Deal>
  {
    return this.httpClient.get<Deal>(this.baseUrl + "/retrieveDealByDealId/" + dealId).pipe
    (
      catchError(this.handleError)
    );
  }

  filterDealByTagId(tagIds: number[]): Observable<Deal[]> {
    return this.httpClient.get<Deal[]>(this.baseUrl + "/filterDealByTagId/" + tagIds).pipe
      (
        catchError(this.handleError)
      );
  }

  retrievePurchasedDealsByCustIdandBizId(custId: number, bizId: number): Observable<Deal[]>
  {		
    return this.httpClient.get<Deal[]>(this.baseUrl + "/retrievePurchasedDealsByCustIdandBizId/" + custId + "/" + bizId).pipe
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
