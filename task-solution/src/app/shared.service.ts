import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private textSource = new BehaviorSubject<string>('');
  currentText = this.textSource.asObservable();

  changeText(text: string) {
    this.textSource.next(text);
  }

  constructor() { }
}
