import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  colors = ['primary', 'accent', 'warn', '']
  idx = 0


  constructor() { }

  ngOnInit(): void {

  }

  clicou() {
    setInterval(() => {
      this.idx++ % this.colors.length
    }, 500)
  }
}
