import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import jsonData from '../assets/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'task-solution';
  data: any = jsonData;
  dataFromLocalStorage: any;

  ngOnInit(): void {
    localStorage.setItem("data", JSON.stringify(this.data));
    const d = localStorage.getItem("data")
    this.dataFromLocalStorage = d ? JSON.parse(d) : null;
  }
}
