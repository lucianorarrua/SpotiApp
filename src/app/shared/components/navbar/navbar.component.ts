import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit() {}

  actualizarToken(tokenInput: string) {
    this.spotifyService.actualizarToken(tokenInput);
    this.router
      .navigateByUrl('/not-found', { skipLocationChange: true })
      .then(() => this.router.navigate(['/home']));
    //this.router.navigate(['/search']);
    //this.router.navigate(['/home']);
  }
}
