import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from "../shared/chat.service";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({
  selector: 'ct-chat-list',
  styleUrls: ['./chat-list.component.scss'],
  templateUrl: './chat-list.component.html'
})

export class ChatListComponent implements OnInit, OnDestroy {

  private selectedId: number;
  private searchValue: string = "";
  private subscriptions: Subscription[] = [];

  @Input() chats: Chat[];
  constructor(private service: ChatService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.subscriptions.push(this.service
                        .getSearchValue()
                        .subscribe(value => this.searchValue = value)
    )
  }

  ngOnDestroy(){
    this.subscriptions.map(subscr => subscr.unsubscribe());
  }

  select(chat: Chat) {
    this.selectedId = chat.id;

    // Navigate with relative link
    this.router.navigate(['chat', chat.id])
  }

}