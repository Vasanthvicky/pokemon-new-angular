import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] =[];
  page = 1;
  totalPokemons: number;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemons;
    console.log(this.getPokemons())

  }

  // Get Pokemons 
  getPokemons() {
    this.dataService.getPokemonApi(10, this.page + 0).subscribe((response: any) => {
      // console.log(response);
      this.totalPokemons = response.count;
      response.results.forEach(result => {
        this.dataService.getMoreData(result.name).subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        })
      })
    })
  }

  pokemonDetailsView(pokemon: any) {
    this.router.navigate(['../pokemon-view', pokemon.id]);
    console.log(pokemon)
  }
}
