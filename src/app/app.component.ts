import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  frases: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api-adonisjs.herokuapp.com/frases').subscribe(data => {
      this.frases = data
    })
  }
}
