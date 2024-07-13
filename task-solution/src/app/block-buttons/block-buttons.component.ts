import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-block-buttons',
  standalone: true,
  imports: [],
  templateUrl: './block-buttons.component.html',
  styleUrl: './block-buttons.component.scss'
})
export class BlockButtonsComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  dataFromLocalStorage: any;
  radioButtonOption: any = '';
  dataID: [] = [];
  showedData = new Set();
  unshownData: string[] = [];

  ngOnInit() {
    this.sharedService.radioButtonOption.subscribe(radioButtonOption => {
      this.radioButtonOption = radioButtonOption;
    });

    this.sharedService.showedData.subscribe(showedData => {
      this.showedData = showedData;
    })

    const d = localStorage.getItem("data")
    this.dataFromLocalStorage = d ? JSON.parse(d) : null;
    
    this.dataID = this.dataFromLocalStorage.data.map((data:any) => {
      return data.id
    })

  }

  getRandomElement(array: any) {
    return array[Math.floor(Math.random() * array.length)];
  }

  findItemById(items: [any], id: any): any | undefined {
    return items.find(item => item.id === id);
  }

  replaceData() {
    switch(this.radioButtonOption) {
      case '1':
        this.showedData.clear();
        this.sharedService.changeData(this.dataFromLocalStorage.data[0].text);
        this.showedData.add(this.dataFromLocalStorage.data[0].id)
        break;
      case '2':
        this.showedData.clear();
        this.sharedService.changeData(this.dataFromLocalStorage.data[1].text);
        this.showedData.add(this.dataFromLocalStorage.data[1].id)
        break;
      case '3':
        this.showedData.clear();
        const randomElement = this.getRandomElement(this.dataFromLocalStorage.data);
        this.sharedService.changeData(randomElement.text);
        this.showedData.add(randomElement.id);
        break;
      default:
        alert("Proszę najpierw wybrać opcję w bloku pierwszym")
    }

  }

  addData() {
    this.unshownData = this.dataID.filter((value) => !this.showedData.has(value))
    if (this.unshownData.length === 0) {
      alert("Wszystkie dane z pliku JSON zostały wyświetlone");
    } else {
      switch(this.radioButtonOption) {
        case '1':
          if(this.showedData.has('1')) {
            alert("Nie można dodać pierwszego elementu z pliku JSON, ponieważ jest już wyświetlony");
          } else {
            this.sharedService.addData(this.dataFromLocalStorage.data[0].text);
            this.showedData.add(this.dataFromLocalStorage.data[0].id);
            this.sharedService.setShowedData('1');
          }
          break;
        case '2':
          if(this.showedData.has('2')) {
            alert("Nie można dodać drugiego elementu z pliku JSON, ponieważ jest już wyświetlony");
          } else {
            this.sharedService.addData(this.dataFromLocalStorage.data[1].text);
            this.showedData.add(this.dataFromLocalStorage.data[1].id);
            this.sharedService.setShowedData('2');
          }
          break;
        case '3':
          const randomElement = this.getRandomElement(this.unshownData);
          this.sharedService.addData(this.findItemById(this.dataFromLocalStorage.data, randomElement).text);
          this.showedData.add(randomElement);
          this.sharedService.setShowedData(randomElement);
          break;
        default:
          alert("Proszę najpierw wybrać opcję w bloku pierwszym")
      }
    }
  }
}
