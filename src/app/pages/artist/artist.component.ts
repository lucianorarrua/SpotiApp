import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService, Countries } from 'src/app/services/spotify.service';
import { ReproductorService } from 'src/app/services/reproductor.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any;
  albumsArtist: any;
  topTracksArtist: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private reproductorService: ReproductorService
  ) {
    this.activatedRoute.params.subscribe(parametros => {
      spotifyService.getArtist(parametros.id_artist).subscribe(artist => {
        this.artist = artist;
      });
      spotifyService.getAlbumArtist(parametros.id_artist).subscribe(albums => {
        this.albumsArtist = albums;
      });
      spotifyService
        .getTopTracksArtist(parametros.id_artist, Countries.Argentina)
        .subscribe(tracks => {
          this.topTracksArtist = tracks;
          console.log(this.topTracksArtist);
        });
    });
  }

  ngOnInit() {}

  playTrack(track: string) {
    this.reproductorService.reproducir(track);
  }

  millisToMinutesAndSeconds(millis: number) {
    let minutes: number = Math.floor(millis / 60000);
    let seconds: string = ((millis % 60000) / 1000).toFixed(0);
    return (
      minutes + ':' + (Number.parseFloat(seconds) < 10 ? '0' : '') + seconds
    );
  }
}
