import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.css']
})
export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonApiService: PokemonApiService){}

  @Input() data?: any;
  @Input() seleccionado: boolean = false;
  @Output() clickeado = new EventEmitter<string>();

  id: string = "0";

  ngOnChanges(changes: SimpleChanges): void {
    this.obtenerid()
  }

  obtenerid() {
    console.log
    if(this.data) {
      this.id = this.data.url.substring(34,this.data.url.length -1);
      this.pokemonApiService.getById(this.id);
      return
    }
  }

}
