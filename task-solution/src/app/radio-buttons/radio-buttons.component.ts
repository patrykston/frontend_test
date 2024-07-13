import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio-buttons.component.html',
  styleUrl: './radio-buttons.component.scss'
})
export class RadioButtonsComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  public radioButtonReactiveForm: FormGroup | undefined;

  selectedOption: string | undefined

  ngOnInit() {
    this.selectedOption = '0';
  }
}
