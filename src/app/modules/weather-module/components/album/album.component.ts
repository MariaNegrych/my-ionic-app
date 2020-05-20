import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../../models/UserModel';
import {ActivatedRoute} from '@angular/router';
import {WeatherModel} from '../../../../models/WeatherModel';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums: WeatherModel;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.albums = value.info as WeatherModel;
    });
  }

  ngOnInit(): void {
  }

}
