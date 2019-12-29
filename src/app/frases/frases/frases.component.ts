import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
  frases: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api-adonisjs.herokuapp.com/frases').subscribe(data => {
      this.frases = data
    })
  }

}
