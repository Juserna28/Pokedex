import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interaces/pokemoninterfa';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent {

  @Input() pokemon? : any;
}
