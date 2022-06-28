import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-food-picker',
  templateUrl: './food-picker.component.html',
  styleUrls: ['./food-picker.component.css']
})
export class FoodPickerComponent implements OnInit {
  selected: string = '';
  items: string[] = [];
  foodItem: string = '';
  constructor(private _snackBar: MatSnackBar) { }

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
     // this.selected = "Add some items first";
     this._snackBar.open("Add some items first", "OK", {
      duration: 5000
    })
  }
    else {
      var index = Math.floor(Math.random() * (this.items.length))
      console.log(index);
      this.selected = this.items[index];
    }
  }
  clear(){
    this.items = [];
    this.selected='';
  }
}
