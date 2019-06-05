import { Component, OnInit } from '@angular/core';
import {
  SpotifyService,
  SearchTypes,
  Countries
} from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  listaCanciones: any[];
  listaArtistas: any[];
  loadTracks: boolean;
  loadArtists: boolean;
  searchTerm: string;
  constructor(private spotifyService: SpotifyService) {
    this.loadTracks = true;
    this.loadArtists = true;
  }

  updatePage(termino: string) {
    // Este 'if' es para que no aparezca el loading si no se ingresa nada en la barra de busqueda
    if (!termino) {
      this.loadTracks = true;
      this.loadArtists = true;
      this.listaCanciones = [];
      this.listaArtistas = [];
    } else {
      this.loadTracks = false;
      this.loadArtists = false;
      this.spotifyService
        .search(termino, SearchTypes.Canciones, 5, Countries.Argentina)
        .subscribe(data => {
          this.listaCanciones = data.tracks.items;
          this.loadTracks = true;
        });
      this.spotifyService
        .search(termino, SearchTypes.Artistas, 5, Countries.Argentina)
        .subscribe(data => {
          this.listaArtistas = data.artists.items;
          this.loadArtists = true;
        });
    }
  }
}
