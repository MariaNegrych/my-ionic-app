import { Component, OnInit } from '@angular/core';
import {AlbumModel} from '../../../../models/AlbumModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit {

  albums: AlbumModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.albums = this.activatedRoute.snapshot.data.allAlbums;
  }

  ngOnInit(): void {
  }

}
