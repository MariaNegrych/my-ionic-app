import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-all-albums',
  templateUrl: './all-albums.component.html',
  styleUrls: ['./all-albums.component.css']
})
export class AllAlbumsComponent implements OnInit {

  f: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private  formBuilder: FormBuilder) {
    this.f = formBuilder.group({
      city: ''
    });
  }
  ngOnInit(): void {

  }
  async onSearch(f: FormGroup) {
    const {city} = this.f.value;
    this.router.navigate(['page/weather/info', city]);

  }
}
