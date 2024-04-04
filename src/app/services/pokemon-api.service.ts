import { Injectable } from '@angular/core';
import { Resultado } from '../interaces/pokeapi-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor() { }

  //Obtener datos de la lista
  //Fetch se comunica por url y espera resultado
  async getByPage(page: number ,limit: number = 40):Promise <any> {
    if(page > 5) return [];
    const offset = limit *(page);
   const pokeList = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    const pokelistJson = await pokeList.json(); //Transforamcion en json
    if(pokelistJson.results.length > 0) 
    return pokelistJson.results;
    return [];
  }

  //Obtener por id
  async getById(id : string):Promise<any> {
    const pokeList = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return pokeList.json();
  }

  getDescription() {

  }
}
