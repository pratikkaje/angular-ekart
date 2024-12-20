import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';
  
  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>();  

  @ViewChild('searchInput') searchInputEl : ElementRef;

  onSearchTextChanged() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText);
  }
}
