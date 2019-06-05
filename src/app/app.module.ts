import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Routes
import { AppRoutingModule } from './app-routing.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { TrackCardComponent } from './shared/components/track-card/track-card.component';

// ngx-Bootstrap Componentes import
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ArtistCardComponent } from './shared/components/artist-card/artist-card.component';
import { ReproductorComponent } from './shared/components/reproductor/reproductor.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { AlbumCardComponent } from './shared/components/album-card/album-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    NotFoundComponent,
    LoadingComponent,
    TrackCardComponent,
    ArtistCardComponent,
    ReproductorComponent,
    ArtistComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
