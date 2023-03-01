import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onHeaderClickedEvent = new EventEmitter<string>;

  OnHeaderClick(selectedLink:string){
    console.log('user navigated to::', selectedLink);
    this.onHeaderClickedEvent.emit(selectedLink);
  }
}
