import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isLogin: boolean;
  authToken: string;

  userEmail: string;
  userId: string;

  constructor(private sessionService: SessionService, private userService: UserService) { }

  ngOnInit(): void {
    this.isLogin = this.sessionService.getIsLogin();

    if (this.isLogin) {
      this.authToken = this.sessionService.getToken();
      this.userService.getUserDetails(this.authToken).subscribe(
        response => {
          console.log(response);

          this.userEmail = response.email;
          this.userId = response.id;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  signOut(): void {
    this.reset();
  }

  reset(): void {
    this.sessionService.setIsLogin(false);
    this.isLogin = false;

    this.sessionService.setToken("");
    this.authToken = "";
  }
}
