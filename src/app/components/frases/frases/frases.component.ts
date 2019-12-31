import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
  frases: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/frases`).subscribe(data => {
      this.frases = data
    })
  }
}
