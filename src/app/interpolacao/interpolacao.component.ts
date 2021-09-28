import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  person = {
    firstname: "Lucas",
    lastname: "Pessutto",
    age: 25,
    adress: "Rua Dr. Carlos Orsi Filho"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
