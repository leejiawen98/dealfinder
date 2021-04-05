import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/category';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = "/api/Category";

  allLeafCategories: Category[];
  leafCategories: Category[];

  constructor(private httpClient: HttpClient) { 
    this.allLeafCategories = new Array();
    this.leafCategories = new Array();
  }

  retrieveAllCategories(): Observable<Category[]>
  {		
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllCategories").pipe 
    (
      catchError(this.handleError)
    );
  }
  
  retrieveAllRootCategories(): Observable<Category[]>
  {		
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllRootCategories").pipe 
    (
      catchError(this.handleError)
    );
  }

  retrieveAllLeafCategories(): Observable<Category[]>
  {		
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllLeafCategories").pipe 
    (
      catchError(this.handleError)
    );
  }

  retrieveAllCategoriesWithoutProduct(): Observable<Category[]>
  {		
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllCategoriesWithoutProduct").pipe 
    (
      catchError(this.handleError)
    );
  }

  retrieveCategoryByCategoryId(categoryId: number): Observable<Category>
  {
    return this.httpClient.get<Category>(this.baseUrl + "/retrieveCategoryByCategoryId/" + categoryId).pipe
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
