import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';
  
  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>();  

  onSearchTextChanged(inputEl : HTMLInputElement) {
    this.searchText = inputEl.value;
    this.SearchTextChanged.emit(this.searchText);
  }

}
