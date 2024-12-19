import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes this service available throughout the app
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api'; // API endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch users
  getUsers(count: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${count}`).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => new Error('Failed to fetch users.'));
      })
    );
  }
}
