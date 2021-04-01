import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isLogin: boolean;
  authToken: string;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.isLogin = this.sessionService.getIsLogin();

    if (this.isLogin) {
      this.authToken = this.sessionService.getToken();
    }
  }

}
