import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

  pokemonDetails: any;
  pokemonDetailsId;


  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getPockemonDetails();
  }
  getPockemonDetails(): void {
    this.pokemonDetailsId = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(this.pokemonDetailsId)
    
    this.dataService.getSpeisesData(this.pokemonDetailsId).subscribe((response)=> {
      this.pokemonDetails = response;
      console.log(response);
      
    });
  } 
  backNavigate() {
    this.router.navigate(['../pokemon-list'])
  }
}
