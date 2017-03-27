import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './shared/chat.service';
import { Chat } from './shared/chat.model';
import { Subscription } from "rxjs";

@Component({
  selector: 'ct-chats',
  styleUrls: ['./chats.component.scss'],
  templateUrl: './chats.component.html'
})

export class ChatsComponent implements OnInit, OnDestroy {
   chats: Chat[];
   private subscriptions: Subscription[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.subscriptions.push(this.chatService.getChats().subscribe(
                          chats => this.chats = chats,
                          err => console.log(err)    
      )
    );
  }

   ngOnDestroy(){
    this.subscriptions.map(subscr => subscr.unsubscribe());
  }

  isChatListClosed: boolean;

  onToggled(isClosed){
    this.isChatListClosed = isClosed;
  }

}