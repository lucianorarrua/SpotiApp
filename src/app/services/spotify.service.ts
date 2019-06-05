import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private httpClient: HttpClient) { }
  token: string;
  urlSpotifyApiVersion: string = 'https://api.spotify.com/v1';

  actualizarToken(access_token: string) {
    this.token = `Bearer ${access_token}`;
  }

  getToken() {
    let headers: HttpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });

    let bodyToken: any = {
      grant_type: 'client_credentials',
      client_id: 'ae5fd817e58c4ee697d39d1c3f98580f',
      client_secret: '8ebd936a4105429587e18ec4504236f8'
    };

    return this.httpClient.post('https://accounts.spotify.com/api/token', {
      headers,
      bodyToken
    });
  }

  getArtist(id_artist: string) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient.get(
      `${this.urlSpotifyApiVersion}/artists/${id_artist}`,
      {
        headers
      }
    );
  }

  getAlbumArtist(id_artist: string) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient
      .get(`${this.urlSpotifyApiVersion}/artists/${id_artist}/albums`, {
        headers
      })
      .pipe(
        map((data: any) => {
          return data.items;
        })
      );
  }

  getTopTracksArtist(id_artist: string, countrie: Countries) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.token
    });
    return this.httpClient
      .get(
        `${
        this.urlSpotifyApiVersion
        }/artists/${id_artist}/top-tracks?country=${countrie}`,
        {
          headers
        }
      )
      .pipe(
        map((data: any) => {
          return data.tracks;
        })
      );
  }

  getListNewReleases(countrie: Countries, limit: number) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.token
    });
    const params: any = {
      country: countrie,
      limit: limit.toString()
    };

    return this.httpClient.get(
      `${this.urlSpotifyApiVersion}/browse/new-releases`,
      {
        headers,
        params
      }
    );
  }

  getRecomendations(
    market: Countries,
    limit: number,
    seed_artists: string,
    seed_genres: string,
    seed_tracks: string
  ) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.token
    });
    const params: any = {
      limit: limit.toString(),
      market,
      seed_artists,
      seed_genres,
      seed_tracks
    };

    return this.httpClient
      .get(`${this.urlSpotifyApiVersion}/recommendations`, {
        headers,
        params
      })
      .pipe(
        map((data: any) => {
          return data.tracks;
        })
      );
  }

  search(
    termino: string,
    type: SearchTypes,
    limit?: number,
    market: Countries = Countries.Todos
  ) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.token
    });
    const params: any = {
      q: termino,
      type,
      market,
      limit
    };

    return this.httpClient
      .get(`${this.urlSpotifyApiVersion}/search`, {
        headers,
        params
      })
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }
}

export enum Countries {
  Todos = ' ',
  Argentina = 'AR',
  Brasil = 'BR',
  Uruguay = 'UY',
  Venezuela = 'VN'
}

export enum SearchTypes {
  Albumes = 'album',
  Artistas = 'artist',
  Listas = 'playlist',
  Canciones = 'track'
}
