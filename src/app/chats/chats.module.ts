import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared';
import { ChatsComponent } from './chats.component';
import { ChatListComponent } from './chat-list';
import { ChatDetailComponent } from './chat-detail';
import { ChatNewComponent } from './chat-new';
import { ChatHolderComponent } from './chat-holder';
import { ChatsRoutingModule } from './chats-routing.module';
import { MessagesSharedModule } from '../messages';
import { ChatService } from './shared/chat.service';
import { FilterByNamePipe } from "./chat-filter.pipe";
import { ChatNavComponent } from "./chat-nav/chat-nav.component";
import { FilterUsersPipe } from "./chat-new/filter-users.pipe";

@NgModule({
  declarations: [
    ChatsComponent,
    ChatListComponent,
    ChatDetailComponent,
    ChatNewComponent,
    ChatHolderComponent,
    ChatNavComponent,
    FilterByNamePipe,
    FilterUsersPipe
  ],
  imports: [
    SharedModule,
    MessagesSharedModule,
    ChatsRoutingModule
  ],
  providers: [ChatService]
})

export class ChatsModule {}