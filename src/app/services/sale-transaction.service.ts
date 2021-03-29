import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SaleTransaction } from '../models/sale-transaction';
import { CreateSaleTransactionReq } from '../models/create-sale-transaction-req';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SaleTransactionService {

  baseUrl: string = "/api/SaleTransaction";

  constructor(private httpClient: HttpClient) { }

  createNewSaleTransaction(newSaleTransaction: SaleTransaction, customerId: number): Observable<number>
  {		

    let createSaleTransactionReq: CreateSaleTransactionReq = new CreateSaleTransactionReq(customerId, newSaleTransaction);
    
    return this.httpClient.put<number>(this.baseUrl, createSaleTransactionReq, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveAllSaleTransactions(): Observable<SaleTransaction[]>
  {		
    return this.httpClient.get<SaleTransaction[]>(this.baseUrl + "/retrieveAllSaleTransactions").pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveSaleTransactionBySaleTransactionId(saleTransactionId: number): Observable<SaleTransaction>
  {
    return this.httpClient.get<SaleTransaction>(this.baseUrl + "/retrieveSaleTransactionBySaleTransactionId/" + saleTransactionId).pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveSaleTransactionDealByDealId(dealId: number): Observable<SaleTransaction>
  {
    return this.httpClient.get<SaleTransaction>(this.baseUrl + "/retrieveSaleTransactionDealByDealId/" + dealId).pipe
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
