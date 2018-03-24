import { Injectable } from '@angular/core';
import { Nota } from '../model/nota';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class NotasService {

  constructor(public http: HttpClient) { }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>('http://localhost:8080/api/notes');
  }
}
