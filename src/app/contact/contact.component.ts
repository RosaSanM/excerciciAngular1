import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  template: `<h1>Contact Component`,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContact: FormGroup;
 
  constructor() { 
    this.formContact = new FormGroup({
      name: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      subject: new FormControl('', [
        Validators.required
      ]),
      message: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formContact.value);
  }

}
