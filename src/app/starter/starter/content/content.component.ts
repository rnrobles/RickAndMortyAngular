import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private characterService:CharacterService) { }

  ngOnInit() {

    this.characterService.getAllCharacters().subscribe((resp)=>{



    })
  }

}
