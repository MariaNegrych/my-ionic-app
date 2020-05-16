import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HelloRoutingModule } from './hello-routing.module';
import {HelloComponent} from './components/hello/hello.component';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {UserInfoComponent} from '../users/user-info/user-info.component';



@NgModule({
  declarations: [
      HelloComponent,
      UserInfoComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ],
    providers: [
        Vibration
    ]
})
export class HelloModule { }
