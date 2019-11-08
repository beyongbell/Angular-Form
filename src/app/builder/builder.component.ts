import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName : [''],
    address  : this.fb.group({
      city : [''],
      zip  : ['']
    }),
    mobiles: this.fb.array([
      this.fb.control('')
    ])
  });

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.userForm.value);
    console.log(this.userForm.controls.firstName.value);
    console.log(this.userForm.controls.address.value.city);
    console.log(this.userForm.get('firstName').value);
    console.log(this.userForm.get(['address', 'city']).value);
    console.log(this.userForm.get('address').get('city').value);

    console.log(this.userForm.controls.mobiles.value);
    console.log(this.userForm.controls.mobiles.value[0]);
    console.log(this.userForm.get(['mobiles', '0']).value);
    console.log(this.userForm.get('mobiles').get('0').value);
  }

  get mobiles() {
    return this.userForm.get('mobiles') as FormArray;
  }

  addNewMobile() {
    this.mobiles.push(this.fb.control(''));
  }

}
