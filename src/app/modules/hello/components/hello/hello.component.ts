import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Vibration} from '@ionic-native/vibration/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {

  f: FormGroup;

  constructor(private  formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private vibration: Vibration,
              public loadingController: LoadingController) {
    this.f = formBuilder.group({
      id: ''
    });
  }

  ngOnInit(): void {
  }

 async onSearch(f: FormGroup) {
    const {id} = this.f.value;
    this.router.navigate(['page/home/info', id]);
    this.vibration.vibrate(1000);

    const loading = await this.loadingController.create({
     message: 'Please wait...',
     duration: 2000
   });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}

