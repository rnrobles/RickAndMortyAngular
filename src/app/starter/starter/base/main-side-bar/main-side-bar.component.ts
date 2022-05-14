import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter-main-side-bar',
  templateUrl: './main-side-bar.component.html',
  styleUrls: ['./main-side-bar.component.scss'],
})
export class MainSideBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routerNavigate(url: string) {
    this.router.navigate(['/']).then((e) => {
      this.router.navigate([url]);
    });
  }
}
