import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreateFavReq } from '../models/create-fav-req';
import { Favourite } from '../models/favourite';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  baseUrl: string = "/api/Favourite";

  constructor(private httpClient: HttpClient) { }

  getAllFavourites(): Observable<Favourite[]>
  {		
    return this.httpClient.get<Favourite[]>(this.baseUrl + "/retrieveAllFavourites").pipe
    (
      catchError(this.handleError)
    );
  }

  createNewFavourite(customerId: number, favourite: Favourite, dealId: number): Observable<Favourite>
  {	
    let createFavouriteReq: CreateFavReq = new CreateFavReq(customerId, dealId, favourite);	

    return this.httpClient.put<Favourite>(this.baseUrl, createFavouriteReq, httpOptions).pipe
    (
      catchError(this.handleError)
    );
  }

  retrieveFavouriteByCustomerId(customerId: number): Observable<Favourite[]>
  {
    return this.httpClient.get<Favourite[]>(this.baseUrl + "/retrieveFavouriteByCustomerId/" + customerId).pipe
    (
      catchError(this.handleError)
    );
  }

  deleteFavourite(favouriteId: number): Observable<any>
  {
    return this.httpClient.delete<any>(this.baseUrl + "/" + favouriteId).pipe
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
