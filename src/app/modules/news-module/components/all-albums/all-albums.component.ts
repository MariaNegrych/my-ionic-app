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
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.albums.length === 10) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
