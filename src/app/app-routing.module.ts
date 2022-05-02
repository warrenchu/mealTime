import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPickerComponent } from './food-picker/food-picker.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},{
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {path: 'picker', component: FoodPickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
