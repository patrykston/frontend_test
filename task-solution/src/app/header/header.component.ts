import { Component } from '@angular/core';
import { HeaderIconComponent } from '../header-icon/header-icon.component';
import { HeaderTextComponent } from '../header-text/header-text.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderIconComponent, HeaderTextComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
