import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  id: string | null = null;
  character: Character | undefined;

  @Input() idParam: string | undefined = undefined;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if(this.idParam){
      this.id = this.idParam
    }else{
      this.id = this.route.snapshot.paramMap.get('id');
    }

    if (this.id) {
      this.characterService
        .getCharacter(Number.parseInt(this.id))
        .subscribe((resp) => {
          if (resp) {
            this.character = resp;
          }
        });
    }
  }
}
