import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAlbumsComponent} from './components/all-albums/all-albums.component';
import {AlbumResolverService} from './services/album-resolver/album-resolver.service';


const routes: Routes = [
  {path: '', component: AllAlbumsComponent, resolve: {allAlbums: AlbumResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumModuleRoutingModule { }
