import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-splitter',
  templateUrl: './bill-splitter.component.html',
  styleUrls: ['./bill-splitter.component.css']
})
export class BillSplitterComponent implements OnInit {
  payment_per_person: number=0;
  restaurant_amount: number=0;
  num_ppl: number=1;

  constructor() { }


  ngOnInit(): void {
  }
  calculateSplit(){
    this.payment_per_person = this.restaurant_amount/this.num_ppl
  }
}
