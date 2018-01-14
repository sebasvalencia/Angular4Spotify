import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino: string = '';

  //Inyecto el servicio al componente
  constructor(public _spotify: SpotifyService) {

  }

  buscarArtista() {
    console.log(this.termino);

    //prevenir arreglo vacio
    if(this.termino.length == 0){
      return;
    }

    this._spotify.getArtistas(this.termino)
      .subscribe(artistas => {
        //solo se ejecuta logica especializada
        console.log('Información Lista!');
        console.log(artistas);
      });
  }

  ngOnInit() {
  }

}
