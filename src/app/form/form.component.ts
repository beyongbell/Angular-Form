import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

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
