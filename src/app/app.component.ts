import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba-sigma';

  // ----------- Variables -----------------------------
  Departamentos = [];

  // ------------ Code ---------------------------------
  constructor(public json: JsonService) { }

  ngOnInit() {
    this.json.getJson('http://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json').subscribe((data: any) => {
      data.forEach(element => {
        this.Departamentos.push(element);
      });
      console.log(this.Departamentos);
    });
  }
}
