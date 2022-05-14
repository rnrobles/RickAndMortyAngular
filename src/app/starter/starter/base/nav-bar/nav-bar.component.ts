import { Component, OnInit, VERSION  } from '@angular/core';
import pkg  from '../../../../../../package.json';

@Component({
  selector: 'app-starter-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public appVersion=""

  constructor() {

   }

  ngOnInit() {
    this.appVersion = pkg.version
  }

}
