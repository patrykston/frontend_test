import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer-button',
  standalone: true,
  imports: [],
  templateUrl: './footer-button.component.html',
  styleUrl: './footer-button.component.scss'
})
export class FooterButtonComponent {
  constructor(private sharedService: SharedService) {}

  resetSettings() {
    this.sharedService.changeText('');
  }

  sendPersonalData() {
    this.sharedService.changeText('Patryk Stoń');
  }
}
