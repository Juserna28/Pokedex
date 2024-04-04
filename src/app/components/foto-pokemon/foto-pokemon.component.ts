import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interaces/pokemoninterfa';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.css']
})
export class FotoPokemonComponent {
@Input() pokemon?: Pokemon;


}
