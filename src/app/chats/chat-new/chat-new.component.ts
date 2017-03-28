import { Component, OnInit, OnDestroy } from '@angular/core';
import { USERS } from "../../auth/users/mock-users";
import { Chat } from "../shared/chat.model";
import { UserService } from "../../auth/users/user.service";
import { ChatNewService } from "./chat-new.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'ct-chat-new',
  styleUrls: ['./chat-new.component.scss'],
  templateUrl: './chat-new.component.html',
  providers: [ChatNewService]
})

export class ChatNewComponent implements OnInit, OnDestroy {
  private users: any[] = USERS;
  private searchValue: string = '';
  private subscriptions: Subscription[] = [];
  userId: number = 1;
  isUserListVisible: boolean = false;
  isUserChecked: boolean = false;
  newChat: Chat = {
    id: this.userId,
    name: '',
    attendees: [],
    creator: this.userId,
    createdAt: new Date()
  };

  constructor(
    private userService: UserService,
    private chatNewService: ChatNewService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.chatNewService.getSearchValue().subscribe(value => this.searchValue = value)
    )
  }

  ngOnDestroy(): void {
     this.subscriptions.map(subscr => subscr.unsubscribe());
   }

  addUser(btn: HTMLElement, i: number){
    if(!btn.classList.contains('user-selection-btn--checked')){
      this.newChat.attendees.push(i)
    }else {
      this.newChat.attendees.splice(this.newChat.attendees[i], 1);
    }

    btn.classList.toggle('user-selection-btn--checked');
    this.isUserChecked = this.newChat.attendees.length > 0;
  }

  openUserList(){
    this.isUserListVisible = true;
  }

  onSubmit(formValue) {
    this.newChat.name = formValue.chatName;
    console.log(formValue)
    console.log(this.newChat)
  }

  private onSearchValueChange(value: string): void {
    this.chatNewService.setSeachValue(value);
  }

}