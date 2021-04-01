import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IconDefinition, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  faFacebookF: IconDefinition = faFacebookF;
  faGoogle: IconDefinition = faGoogle;

  submitted: boolean;
  signInEmail: string;
  signInPassword: string;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router, private userService: UserService, private sessionService: SessionService) {
    this.submitted = false;
    this.signInEmail = "";
    this.signInPassword = "";

    this.resultSuccess = false;
    this.resultError = false;
    this.message = "";
  }

  ngOnInit(): void {
  }

  signIn(signInForm: NgForm) {
    this.submitted = true;

    if (signInForm.valid) {
      this.userService.login(this.signInEmail, this.signInPassword).subscribe(
        response => {
          console.log(response);
          this.resultSuccess = true;
          this.resultError = false;

          this.sessionService.setIsLogin(true);
          this.sessionService.setToken(response.auth_token);

          this.signInEmail = "";
          this.signInPassword = "";

          signInForm.resetForm();
          this.submitted = false;

          this.router.navigate(["/index"]);
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
