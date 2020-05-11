import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  f: FormGroup;

  constructor(private  formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.f = formBuilder.group({
      id: ''
    });
  }

  ngOnInit(): void {
  }

  onSearch(f: FormGroup) {
    const {id} = this.f.value;

    // this.router.navigate(['info', id],{
    //   relativeTo: this.activatedRoute
    // });
    this.router.navigate(['page/home/info', id]);
    // f.reset(undefined);
  }
}
