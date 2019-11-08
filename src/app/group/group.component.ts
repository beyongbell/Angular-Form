import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  userForm = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName  : new FormControl(''),
    age       : new FormControl(''),
    email     : new FormControl(''),
    address   : new FormGroup({
      city : new FormControl(''),
      zip  : new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.userForm.value);
    console.log(this.userForm.controls.firstName.value);
    console.log(this.userForm.controls.address.value.city);
    console.log(this.userForm.get('firstName').value);
    console.log(this.userForm.get(['address', 'city']).value);
    console.log(this.userForm.get('address').get('city').value);
  }

  updateModel() {
    this.userForm.patchValue({
      firstName: 'tinnakorn',
      address: {
        city: 'cm'
      }
    });
  }

}
