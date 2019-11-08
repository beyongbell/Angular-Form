import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  title = 'Angular-Form';
  name = new FormControl('Tinnakorn Choompee');
  test = '';

  constructor() { }

  ngOnInit() {
  }

  setDefaultValue() {
    this.name.patchValue('Angular 8');
    console.log(this.name.value);
  }


}
