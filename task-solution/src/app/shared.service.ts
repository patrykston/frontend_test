import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private option = new BehaviorSubject<string>('');
  private textSource = new BehaviorSubject<string>('');
  private data = new BehaviorSubject<string[]>([]);
  private dataShowed = new BehaviorSubject<Set<string>>(new Set<string>());
  
  radioButtonOption = this.option.asObservable();
  currentText = this.textSource.asObservable();
  dataFromJSON = this.data.asObservable();
  showedData = this.dataShowed.asObservable();

  setOption(option: string) {
    this.option.next(option);
  }

  changeText(text: string) {
    this.textSource.next(text);
  }

  changeData(text: string) {
    this.data.next([text]);
  }

  addData(text: string) {
    const currentText = this.data.value;
    this.data.next([...currentText, text]);

    setTimeout(() => {
      const shownData = document.querySelector(".card__content");
      if (shownData) {
        const paragraphs: HTMLParagraphElement[] = Array.from(shownData.querySelectorAll("p"));

        paragraphs.sort((a, b) => {
          const textA = a.textContent?.toLowerCase() || "";
          const textB = b.textContent?.toLowerCase() || "";
          return textA.localeCompare(textB);
        });

        paragraphs.forEach(p => shownData.removeChild(p));

        paragraphs.forEach(p => shownData.appendChild(p));
      }
    }, 100);
  }

  setShowedData(id: string) {
    const currentData = this.dataShowed.getValue();
    currentData.add(id);
    this.dataShowed.next(currentData);
  }

  resetShowedData() {
    this.dataShowed.next(new Set<string>());
  }

  constructor() { }
}
