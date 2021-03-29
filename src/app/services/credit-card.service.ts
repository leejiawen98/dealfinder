import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreateCreditCardReq } from '../models/create-credit-card-req';
import { CreditCard } from '../models/credit-card';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  baseUrl: string = "/api/CreditCard";

  constructor(private httpClient: HttpClient) { }

  createNewCreditCardEntityForCustomer(newCreditCard: CreditCard, customerId: number): Observable<number>
  {		

    let createCreditCardReq: CreateCreditCardReq = new CreateCreditCardReq(customerId, newCreditCard);
    
    return this.httpClient.put<number>(this.baseUrl, createCreditCardReq, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveCreditCardByCreditCardId(creditCardId: number): Observable<CreditCard>
  {
    return this.httpClient.get<CreditCard>(this.baseUrl + "/retrieveCreditCardByCreditCardId/" + creditCardId).pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveCreditCardByCustomerId(customerId: number): Observable<CreditCard>
  {
    return this.httpClient.get<CreditCard>(this.baseUrl + "/retrieveCreditCardByCustomerId/" + customerId).pipe
    (
      catchError(this.handleError)
    );
  }

  deleteCreditCard(creditCardId: number): Observable<any>
  {
    return this.httpClient.delete<any>(this.baseUrl + "/" + creditCardId).pipe
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
