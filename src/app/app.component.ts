import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faFacebookF: IconDefinition = faFacebookF;
  faTwitter: IconDefinition = faTwitter;
  faInstagram: IconDefinition = faInstagram;
}
