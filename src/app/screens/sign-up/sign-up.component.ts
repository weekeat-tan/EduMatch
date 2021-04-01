import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted: boolean;
  newUser: User;

  resultSuccess: boolean;
  resultError: boolean;
  message: string = "Your user account (ID: ${response.id}) has been created successfully"

  constructor(private router: Router, private userService: UserService) {
    this.submitted = false;
    this.newUser = new User();

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit(): void {
  }

  signUp(signUpForm: NgForm) {
    this.submitted = true;
    this.resultSuccess = false;
    this.resultError = false;

    if (signUpForm.valid) {
      this.userService.createNewUser(this.newUser).subscribe(
        response => {
          console.log(response);
          this.resultSuccess = true;
          this.resultError = false;
          this.message = `Your user account (ID: ${response.id}) has been created successfully`;

          this.newUser = new User();

          signUpForm.resetForm();
          this.submitted = false;
        },
        error => {
          console.log(error);
          this.resultError = true;
          this.resultSuccess = false;
          this.message = error;
        }
      )
    }
  }
}
