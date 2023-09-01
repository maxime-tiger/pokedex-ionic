import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  urlPokemonFirstGen: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
  urlColorPokemon: string = 'https://pokeapi.co/api/v2/pokemon-color/';

  constructor(private http: HttpClient) { }

  async getPokemons(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlPokemonFirstGen).toPromise().then((result: any) => {
        if (result) {
          resolve(result.results);
        } else {
          reject(new Error('Impossible de récupérer les questions. Vérifiez votre connexion internet.'));
        }
      });
    });
  }

  async getDetailsPokemon(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then((result: any) => {
        if (result) {
          resolve(result);
        } else {
          reject(new Error('Impossible de récupérer les questions. Vérifiez votre connexion internet.'));
        }
      });
    });
  }
}
