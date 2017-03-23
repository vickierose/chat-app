import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message.model';

@Component({
  selector: 'ct-message-list',
  styleUrls: ['./message-list.component.scss'],
  templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit {
  color = "#484cc4"; 
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
  }

}