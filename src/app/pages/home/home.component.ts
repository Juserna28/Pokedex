import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/interaces/pokeapi-interface';
import { Pokemon } from 'src/app/interaces/pokemoninterfa';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonApiService: PokemonApiService){}
  @ViewChild('tarjetas') tarjetasElement!: ElementRef;

  listaPokemon: Resultado[] = [];
  paginator: number = 0;
  cargando : boolean = false;
  pokemonseleccionado? : Pokemon;
  detalle : boolean = false;

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    this.cargando = true;
    this.listaPokemon = [...this.listaPokemon , ...await this.pokemonApiService.getByPage(this.paginator)];
    this.paginator++;
    this.cargando = false;
  }

  onScroll(e: any) {
    if(this.cargando) return;
    console.log(e)
    if(
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
        )
        === e.srcElement.scrollHeight){
        this.cargarLista();
      }
      
      }

     async tarjetaclickeada(id: string)  {
        if(this.pokemonseleccionado && id === this.pokemonseleccionado?.id.toString()) {
           return this.cambiarestadodetalle();
        }
        this.pokemonseleccionado = await this.pokemonApiService.getById(id);
      }

      cambiarestadodetalle() {
        if(this.pokemonseleccionado) this.detalle = !this.detalle;
      }

}
