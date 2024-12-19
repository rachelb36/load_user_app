import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
