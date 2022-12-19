import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  constructor() { }
  restaurant_amount: number=0;
  tip_percent: number=0
  tip_amt: number=0
  ngOnInit(): void {
  }
  calculateTip() {
    this.tip_amt = (this.tip_percent/100) * this.restaurant_amount;
  }
  

}
