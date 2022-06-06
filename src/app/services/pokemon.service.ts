import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: any = []

  constructor(private httpClient: HttpClient) {
    this.showPokemons();

  }

  async showPokemons() {
   const requeriment = await this.httpClient
     .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();

    this.pokemons = requeriment.results;
  }
}

