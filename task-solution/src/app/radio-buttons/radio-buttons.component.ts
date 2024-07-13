import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio-buttons.component.html',
  styleUrl: './radio-buttons.component.scss'
})
export class RadioButtonsComponent{

  constructor(private sharedService: SharedService) {}

  selectedOption: string = '0';

  updateOption(value: string) {
    this.selectedOption = value;
    this.sharedService.setOption(this.selectedOption);
  }
}
