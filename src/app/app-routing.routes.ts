import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'artist/:id_artist', component: ArtistComponent },
  { path: 'test', component: LoadingComponent },
  { path: '**', redirectTo: 'home' }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
