import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class AppService {

  constructor(private http : HttpClient) { }
  baseUrl = 'http://jsonplaceholder.typicode.com';

  getData(){
    return this.http.get(`${this.baseUrl}/posts`);
  }

  postData(){
    let data = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    });
    let options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(`${this.baseUrl}/posts`, data , options);
  }

  putData(){
    let data = JSON.stringify({
      title: 'foo',
      body: 'foo-bar',
      userId: 1
    });
    let options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put(`${this.baseUrl}/posts/1`, data , options);
  }

  deleteData(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
}
