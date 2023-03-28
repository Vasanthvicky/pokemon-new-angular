import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  constructor(
    private http: HttpClient
  ) { }
  log(message: string) {
    console.log(message);
  }

  getPockemonApiDetails() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
  }

  
}


