import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  nameButton: string = "Clique Aqui!"
  n: number = 0
  spinnerMode = "determinate"
  btnEnable = true
  selectDisabled = false
  selectedOptions = null
  inputName = ""

  constructor() { }

  ngOnInit(): void {
  }

  clicar() {
    this.n++
    this.nameButton = `Clicou ${this.n} vezes`
    if (this.n == 10) {
     this.nameButton = "Chegamos a 10"
    }
  }

  clicou() {
    this.btnEnable = false
    this.spinnerMode = 'indeterminate'
    setTimeout(() => {
      this.btnEnable = true
      this.spinnerMode = 'determinate'
    }, 2500 )
  }

  cbChange(event: any) {
    console.log(event.clicked)
    this.selectDisabled = event.checked
  }

  selectionChange(event: any) {
    console.log(event)
    this.selectedOptions = event.value
  }

  inputEvent(event: any) {
    console.log(event.target.value)
    console.log(this.inputName)
    this.inputName = event.target.value
  }
}
