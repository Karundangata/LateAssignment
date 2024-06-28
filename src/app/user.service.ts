import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) { }
  
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }
  
  getPosts(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts?userId=${userId}`);
  }
  
  getComments(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments?postId=${postId}`);
  }
}
