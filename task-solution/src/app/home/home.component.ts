import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { SubHeadlineComponent } from '../sub-headline/sub-headline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadlineComponent, SubHeadlineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
