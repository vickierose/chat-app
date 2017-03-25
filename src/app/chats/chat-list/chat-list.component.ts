import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from "../shared/chat.service";
import { BehaviorSubject, Subscription } from "rxjs/Rx";

@Component({
  selector: 'ct-chat-list',
  styleUrls: ['./chat-list.component.scss'],
  templateUrl: './chat-list.component.html'
})

export class ChatListComponent implements OnInit, OnDestroy {

  private selectedId: number;
  private searchValue: string = "";
  private subscribtion: Subscription;

  @Input() chats: Promise<Chat[]>
  constructor(private service: ChatService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.subscribtion = this.service
                        .getSearchValue()
                        .subscribe(value => this.searchValue = value)
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

  select(chat: Chat) {
    this.selectedId = chat.id;

    // Navigate with relative link
    this.router.navigate(['chat', chat.id])
  }

}