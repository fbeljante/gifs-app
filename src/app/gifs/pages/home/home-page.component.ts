import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  //pajeros: string[] = ["friki1","friki2", "friki3", "friki4"]

  constructor ( private gifsService: GifsService ) {}

  get gifs(): Gif[]{
    return this.gifsService.gifsList;
  }
  }


