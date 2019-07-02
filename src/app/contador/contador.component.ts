import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador: number;
  constructor() { }

  ngOnInit() {
    this.contador = 0;
  }

  updateCont(params) {
    if(params === "down") {
      this.contador--;
    }
    else {
      this.contador++;
    }
  } 

}
