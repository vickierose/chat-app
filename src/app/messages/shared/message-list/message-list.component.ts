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

export class MessageListComponent implements OnInit {
  private searchValue: string = '';
  private subscribtion: Subscription;
  actClass = 'message--chosen'; 
  chatId: number;
  messages: Promise<Message[]>
  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {}

  ngOnInit() {
    this.route.params.subscribe ((params: Params) => {
      this.chatId = +params['id'];
      this.messages = this.messageService.getAll(this.chatId);
    });
    
      this.subscribtion = this.messageService
                          .getSearchValue()
                          .subscribe(value => this.searchValue = value) 
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}