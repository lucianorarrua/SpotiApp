import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReproductorService } from 'src/app/services/reproductor.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss']
})
export class ReproductorComponent implements OnInit {
  trackUrl: string;
  @ViewChild('reproductor') reproductor: ElementRef;
  constructor(private reproductorService: ReproductorService) {}

  ngOnInit() {
    this.reproductorService.trackUrl.subscribe(track => {
      this.reproductor.nativeElement.load();
      this.trackUrl = track;
      if (track) {
        this.reproductor.nativeElement.play();
      }
    });
  }
}
