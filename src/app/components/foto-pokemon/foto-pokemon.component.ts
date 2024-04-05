import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interaces/pokemoninterfa';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.css']
})
export class FotoPokemonComponent {
  
@Input() pokemon?: Pokemon;





}
