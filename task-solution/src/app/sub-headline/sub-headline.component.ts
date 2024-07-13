import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-headline',
  standalone: true,
  imports: [],
  templateUrl: './sub-headline.component.html',
  styleUrl: './sub-headline.component.scss'
})
export class SubHeadlineComponent {
  @Input() id: string = '';
  @Input() title: string = '';
}
