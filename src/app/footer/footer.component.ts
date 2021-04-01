import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebookF: IconDefinition = faFacebookF;
  faTwitter: IconDefinition = faTwitter;
  faInstagram: IconDefinition = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
