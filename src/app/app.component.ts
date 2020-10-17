import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipes';
  URL = 'https://jsonplaceholder.typicode.com/users';
  users: any[];
  num = 0.75;
  data = new Date().getTime();
  users$: Observable<any[]>;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get<any[]>(`${this.URL}`).subscribe(value => this.users = value);
    this.users$ = this.httpClient.get<any[]>(`${this.URL}`);
  }
}
