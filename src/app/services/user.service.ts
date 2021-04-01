import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../classes/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://nicson-test.6ac1e6al400ce.ap-southeast-1.cs.amazonlightsail.com";

  constructor(private httpClient: HttpClient) { }

  createNewUser(newUser: User): Observable<any> {
    let createNewUserReq = {
      "first_name": newUser.firstName,
      "last_name": newUser.lastName,
      "email": newUser.email,
      "password": newUser.password
    }

    return this.httpClient.post<any>(this.baseUrl + "/auth/users/", createNewUserReq, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  login(email: string, password: string): Observable<any> {
    let loginReq = {
      "email": email,
      "password": password
    };

    return this.httpClient.post<any>(this.baseUrl + "/auth/token/login/", loginReq, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    console.log(error);

    if (error.error instanceof ErrorEvent) {
      errorMessage = `An unknown error has occurred: ${error.error.message}`
    } else {
      errorMessage = `A HTTP ${error.status} error has occurred: `;
      if (error.error.email != null) {
        errorMessage += error.error.email;
      } else if (error.error.non_field_errors) {
        errorMessage += error.error.non_field_errors;
      } else {
        errorMessage += error.error.message;
      }
    }

    return throwError(errorMessage);
  }
}
