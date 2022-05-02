import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-food-picker',
  templateUrl: './food-picker.component.html',
  styleUrls: ['./food-picker.component.css']
})
export class FoodPickerComponent implements OnInit {
  selected: string = '';
  items: string[] = [];
  foodItem: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  addItem() {
    if (this.foodItem.length > 0 && !this.items.includes(this.foodItem)) {
      this.items.push(this.foodItem);
    }
    this.foodItem = '';
  }
  selectItem() {
    if (this.items.length == 0) {
      this.selected = "Add some items first";
    }
    else {
      var index = Math.floor(Math.random() * (this.items.length))
      console.log(index);
      this.selected = this.items[index];
    }
  }
  clear(){
    this.items = [];
  }
}
