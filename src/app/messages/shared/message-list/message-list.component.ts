import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message.model';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'ct-message-list',
  styleUrls: ['./message-list.component.scss'],
  templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit, OnDestroy {
  private searchValue: string = '';
  actClass = 'message--chosen'; 
  chatId: number;
  messages: Message[];
  subscriptions: Subscription[] = [];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {}

  ngOnInit() {
    this.route.params.subscribe ((params: Params) => {
      this.chatId = +params['id'];
      
      this.subscriptions.push(this.messageService.getMessagesForChat(this.chatId).subscribe(
        messages => this.messages = messages, err => console.log(err)
        )
      )
    });
    
      this.subscriptions.push(this.messageService
                          .getSearchValue()
                          .subscribe(value => this.searchValue = value)
      )
  }

  ngOnDestroy(){
    this.subscriptions.map(subscr => subscr.unsubscribe());
  }

}