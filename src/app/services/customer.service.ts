import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../models/customer';



const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class CustomerService
{
    baseUrl: string = "/api/Customer";



    constructor(private httpClient: HttpClient)
    {

    }

    getAllCustomers(): Observable<Customer[]>
    {		
      return this.httpClient.get<Customer[]>(this.baseUrl + "/retrieveAllCustomers").pipe
      (
        catchError(this.handleError)
      );
    }

    createNewCustomer(newCustomer: Customer): Observable<number>
    {		
      return this.httpClient.put<number>(this.baseUrl, newCustomer, httpOptions).pipe
      (
        catchError(this.handleError)
      );
    }

    retrieveCustomerByCustomerId(customerId: number): Observable<Customer>
    {
      return this.httpClient.get<Customer>(this.baseUrl + "/retrieveCustomerByCustomerId/" + customerId).pipe
      (
        catchError(this.handleError)
      );
    }

    retrieveCustomerByUsername(username: string): Observable<Customer>
    {
      return this.httpClient.get<Customer>(this.baseUrl + "/retrieveCustomerByUsername/" + username).pipe
      (
        catchError(this.handleError)
      );
    }

    updateCustomer(customerToUpdate: Customer): Observable<any>
    {
      return this.httpClient.post<any>(this.baseUrl, customerToUpdate, httpOptions).pipe
      (
        catchError(this.handleError)
      );
    }

    deleteCustomer(customerId: number): Observable<any>
    {
      return this.httpClient.delete<any>(this.baseUrl + "/" + customerId).pipe
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