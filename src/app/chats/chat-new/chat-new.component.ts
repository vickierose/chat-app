import { Component, OnInit } from '@angular/core';
import { USERS } from "../../auth/users/mock-users";
import { Chat } from "../shared/chat.model";
import { UserService } from "../../auth/users/user.service";

@Component({
  selector: 'ct-chat-new',
  styleUrls: ['./chat-new.component.scss'],
  templateUrl: './chat-new.component.html'
})

export class ChatNewComponent implements OnInit {
  private users: any[] = USERS;
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

  constructor(private userService: UserService) {}

  ngOnInit() {}

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

}