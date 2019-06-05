import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReproductorService {
  constructor() {}

  @Output() trackUrl: EventEmitter<string> = new EventEmitter();

  reproducir(trackUrl: string) {
    this.trackUrl.emit(trackUrl);
  }
}
