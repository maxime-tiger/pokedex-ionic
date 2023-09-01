import {Component, OnInit} from '@angular/core';
import { PokedexService } from '../providers/pokedex.service';
import {Pokemon} from "../models/pokemon";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  listPokemon: Pokemon[] = [];

  constructor(private pokedexSrv: PokedexService,private toastCtrl: ToastController) {}

  ngOnInit() {
    this.loadPokedex();
  }

  async loadPokedex() {
    try {
      const result: any = await this.pokedexSrv.getPokemons();
      for (const elem of result) {
        const details = await this.pokedexSrv.getDetailsPokemon(elem.url);
        const imageUrl = details.sprites.other['official-artwork'].front_default;
        const types: string[] = [];
        details.types.forEach((type: any) => {
          types.push(type.type.name)
        });
        const id = details.id;


        const newPokemon = new Pokemon(elem.name, imageUrl, types, id);
        this.listPokemon.push(newPokemon);
      }
      // this.loadCurrentQuestion();
    } catch (error: any) {
      this.showToast(error);
    }
  }

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }

  protected readonly Number = Number;
}
