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

  constructor(private router: Router, private userService: UserService) { 
    this.submitted = false;
    this.newUser = new User();
  }

  ngOnInit(): void {
  }

  signUp(signUpForm: NgForm) {
    this.submitted = true;

    if (signUpForm.valid) {
      // Sign up process
      this.router.navigate(["/sign_in"]);
    }
  }
}

