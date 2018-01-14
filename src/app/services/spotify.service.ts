import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SpotifyService {

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getArtistas() {

    let url = "https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20";

    this.http.get(url)
      .subscribe( respuesta =>{
        console.log(respuesta);
      });

  }

}
