import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header-text',
  standalone: true,
  imports: [],
  templateUrl: './header-text.component.html',
  styleUrl: './header-text.component.scss'
})
export class HeaderTextComponent implements OnInit {
  personalData: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentText.subscribe(personalData => {
      this.personalData = personalData;
    });
  }
}
