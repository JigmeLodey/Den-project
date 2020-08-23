import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'
  ]
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor( private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formbuild()
  }
  formbuild() {
      this.authForm = this.formbuilder.group({
        email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        password: [undefined, Validators.required],
        check: [undefined]
      });
  }
}
