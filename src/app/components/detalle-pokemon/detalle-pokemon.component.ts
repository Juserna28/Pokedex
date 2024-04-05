import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from 'src/app/interaces/pokemoninterfa';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent implements OnChanges {

  @Input() pokemon?: any;
  @Input() abierto : boolean = false;
  @Output()cambiarAbierto = new EventEmitter();

  descripcion: string = "";

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnChanges(): void {

    if (this.pokemon) {
      this.pokemonApiService.getDescription(this.pokemon?.id).then((result) => {
       this.descripcion = result;
      })
    }

  }
}
