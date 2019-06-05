import { Component, OnInit } from '@angular/core';
import { SpotifyService, Countries } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  recomendations: any[] = [];
  loadRecomendations: boolean;
  constructor(private spotifyService: SpotifyService) {
    this.loadRecomendations = false;
    spotifyService
      .getListNewReleases(Countries.Argentina, 10)
      .subscribe(data => {
        //TODO: Hacer los new releases
      });

    spotifyService
      .getRecomendations(
        Countries.Argentina,
        10,
        '4NHQUGzhtTLFvgF5SZesLK',
        'classical,country',
        '0c6xIDDpzE81m2q797ordA'
      )
      .subscribe(data => {
        this.recomendations = data;
        this.loadRecomendations = true;
      });
  }

  ngOnInit() {}
}
