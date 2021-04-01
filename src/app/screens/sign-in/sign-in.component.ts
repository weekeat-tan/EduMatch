import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IconDefinition, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  faFacebookF: IconDefinition = faFacebookF;
  faGoogle: IconDefinition = faGoogle;

  submitted: boolean;
  user: User;

  constructor(private router: Router, private userService: UserService) {
    this.submitted = false;
    this.user = new User();
  }

  ngOnInit(): void {
  }

  signIn(signInForm: NgForm) {
    this.submitted = true;

    if (signInForm.valid) {
      // Sign in process
      this.router.navigate(["/index"]);
    }
  }
}
