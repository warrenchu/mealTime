import { Component, OnInit } from '@angular/core';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
  }
  goHome(){
    this.routerService.routeToHome();
  }

}
