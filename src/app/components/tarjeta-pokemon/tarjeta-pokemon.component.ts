import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/interaces/pokeapi-interface';
import { Pokemon } from 'src/app/interaces/pokemoninterfa';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.css']
})
export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonApiService: PokemonApiService){}

  @Input() data?: Resultado;
  @Input() seleccionado: boolean = false;
  @Input() fullData?:Pokemon;
  @Output() clickeado = new EventEmitter<string>();
  id: string = "0";

  ngOnChanges(): void {
    this.obtenerid()
  }

  obtenerid() {
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34,this.data.url.length-1);
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1);
      this.data = {
        name:this.fullData.species.name,
        url: ""
      }
    }
  }

}
