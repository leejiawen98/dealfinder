import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Admin } from '../models/admin';



const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AdminService
{
    baseUrl: string = "/api/Admin";



    constructor(private httpClient: HttpClient)
    {

    }

    getAdmins(): Observable<Admin[]>
    {		
      return this.httpClient.get<Admin[]>(this.baseUrl + "/retrieveAllAdmins?").pipe //Not sure if have question mark
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