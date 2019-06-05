import { Component, OnInit, Input } from '@angular/core';
import { ReproductorService } from 'src/app/services/reproductor.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {
  @Input() public track: any;
  constructor(private reproductorService: ReproductorService) {}

  playTrack(track: string) {
    this.reproductorService.reproducir(track);
  }

  ngOnInit() {}
}
