import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id']) //extraer solo el id
      .subscribe(id => {
        console.log(id);
      });
  }

}
