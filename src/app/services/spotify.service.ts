import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  getArtistas() {

    let url = "https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20";
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQAYah-BTLLylYRogBGAYewUPCnMEI61aAmEwNOLCt6lrwCtD7HQe95EDiBKFIlvRE80AmHDbwpwIMDcPOE';
    });


    return this.http.get(url, { headers: headers })
      .map(respuesta => {
        //obtiene la respuesta de la peticion 
        //y lo cambia - transformar data
        //llenar el arreglo
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });


  }

}
