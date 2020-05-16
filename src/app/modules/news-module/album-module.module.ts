import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumModuleRoutingModule } from './album-module-routing.module';
import {AllAlbumsComponent} from './components/all-albums/all-albums.component';
import {AlbumComponent} from './components/album/album.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    AllAlbumsComponent,
    AlbumComponent
  ],
    imports: [
        CommonModule,
        AlbumModuleRoutingModule,
        IonicModule
    ]
})
export class AlbumModuleModule { }
