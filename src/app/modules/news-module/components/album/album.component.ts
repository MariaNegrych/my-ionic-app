import {Component, Input, OnInit} from '@angular/core';
import {NewsModel} from '../../../../models/AlbumModel';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input()
  album: NewsModel;
  IsHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.IsHidden = !this.IsHidden;
  }
}
