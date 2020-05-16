import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit {

  albums: any;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.albums = this.activatedRoute.snapshot.data.allAlbums);;
  }

  ngOnInit(): void {
  }

}
