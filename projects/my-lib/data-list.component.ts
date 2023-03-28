import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './src/public-api';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  pokemonLists: any[] = []
  page = 1;
  constructor(readonly loggerService: LoggerService) { }

  ngOnInit(): void {
    this.pockemonList();
    console.log(this.pockemonList());
    
  }
  pockemonList() {
    /* this.loggerService.getPockemonApiDetails(10, this.page + 0).subscribe {
      ((response: any) => {
        response.results.forEach(result => {
          this.loggerService.getPockemonApiDetails(result.name).subscribe((myResponse: any) {
            this.pokemonLists.push(myResponse)
          })
        })
      })
    } */
    this.loggerService.getPockemonApiDetails().subscribe((myResponse: any) => {
      this.pokemonLists = (myResponse);
      console.log(myResponse);
    })
  }

}
