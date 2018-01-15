import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify: string = "https://api.spotify.com/v1/";
  token: string = "BQDS9mXEVlqOf4gXlIzVlVSe5ukuVA2zH5cjgriIIQgB0Tr5jVSOdGummajelkY3khBkPgBMDz2hmh1Qt9w";

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify listo');
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }

  getArtistas(termino: string) {

    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers: headers })
      .map(respuesta => {
        console.log(respuesta);
        //obtiene la respuesta de la peticion 
        //y lo cambia - transformar data
        //llenar el arreglo
        this.artistas = respuesta.artists.items;
        return this.artistas;
        //return respuesta:
      });
  }

  getArtista(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getTop(id: string) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

}
