import { Component } from '@angular/core';
import { FooterLogoComponent } from '../footer-logo/footer-logo.component';
import { FooterInfoComponent } from '../footer-info/footer-info.component';
import { FooterButtonComponent } from '../footer-button/footer-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLogoComponent, FooterInfoComponent, FooterButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
