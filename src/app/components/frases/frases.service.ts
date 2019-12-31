import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrasesService {
  frases: any

  constructor(private http: HttpClient) {
    this.http.get('http://127.0.0.1:3333/frases').subscribe(dados => {
      this.frases = dados

      return this.frases
    });
   }
}
