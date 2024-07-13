import { Component, OnInit } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { SubHeadlineComponent } from '../sub-headline/sub-headline.component';
import { RadioButtonsComponent } from '../radio-buttons/radio-buttons.component';
import { BlockButtonsComponent } from '../block-buttons/block-buttons.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadlineComponent, SubHeadlineComponent, RadioButtonsComponent, BlockButtonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataFromJSON: any = ''

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.dataFromJSON.subscribe(dataFromJSON => {
      this.dataFromJSON = dataFromJSON;
    });
  }
}
