import { Component, EventEmitter, Output } from '@angular/core';
import { ChatService } from '../shared/chat.service';

@Component({
  selector: 'ct-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrls: ['./chat-nav.component.scss'],
})
export class ChatNavComponent {
    private isMenuOpened: boolean = false;
    private isClosed: boolean = false;
    private searchValue: string = '';

constructor(private service: ChatService){}

toggleMenuState(){
  this.isMenuOpened = !this.isMenuOpened;
}

@Output() onToggled = new EventEmitter();

toggleClosedState(){
    this.isClosed = !this.isClosed;
    if(this.isMenuOpened){
      this.isMenuOpened = false;
    }
    
    this.onToggled.emit(this.isClosed);
  }

   onBlur(): void {
    this.searchValue = '';
    this.service.setSearchValue('');
  }

  private onSearchValueChange(value: string): void {
      this.service.setSearchValue(value);
  }
}