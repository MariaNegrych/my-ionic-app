import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllAlbumsComponent} from './components/all-albums/all-albums.component';
import {AlbumResolverService} from './services/album-resolver/album-resolver.service';
import {HelloComponent} from '../hello/components/hello/hello.component';
import {UserInfoComponent} from '../users/user-info/user-info.component';
import {InfoResolverService} from '../users/services/user-info-service/info.resolver.service';
import {CanActivateService} from '../hello/services/can-activate.service';
import {AlbumComponent} from './components/album/album.component';

const routes: Routes = [
    {
        path: '', component: AllAlbumsComponent, children: [
            {
                path: 'info/:city',
                component: AlbumComponent,
                resolve: {info: AlbumResolverService}
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlbumModuleRoutingModule {
}
