import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-compare',
  templateUrl: './character-compare.component.html',
  styleUrls: ['./character-compare.component.scss'],
})
export class CharacterCompareComponent implements OnInit {
  ids: any[]=[];

  constructor(private route: ActivatedRoute) {
   this.ids = this.route.snapshot.queryParams.ids;
  }

  ngOnInit(): void {


  }
}
