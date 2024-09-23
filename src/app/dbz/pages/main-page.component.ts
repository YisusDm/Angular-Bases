import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor( private dbzservice: DbzService) {}

  get character(): Character[]{

    return [...this.dbzservice.character];
  }

  onDeleteCharacter(id: string): void {
    this.dbzservice.deleteCharacterById(id);  // Borramos al personaje con el id correspondiente //  //
  }

  onNewCharacter(character: Character): void {
    this.dbzservice.addCharacter(character); // Agregamos al personaje
  }
}
