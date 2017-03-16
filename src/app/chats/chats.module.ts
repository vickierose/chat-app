import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared';
import { ChatsComponent } from './chats.component';
import { ChatListComponent } from './chat-list';
import { ChatDetailComponent } from './chat-detail';
import { ChatNewComponent } from './chat-new';
import { ChatHolderComponent } from './chat-holder';
import { ChatsRoutingModule } from './chats-routing.module';
import { MessagesSharedModule } from '../messages';

@NgModule({
  declarations: [
    ChatsComponent,
    ChatListComponent,
    ChatDetailComponent,
    ChatNewComponent,
    ChatHolderComponent
  ],
  imports: [
    SharedModule,
    MessagesSharedModule,
    ChatsRoutingModule
  ],
  providers: []
})

export class ChatsModule {}