import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  _url = 'http://localhost:8080/addBook';
  constructor( private _httpClient : HttpClient) { }

  addBook(book : Book){

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._httpClient.post<any>(this._url ,book ,{headers: headers});

  }
}
