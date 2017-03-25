import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';
import { MessageService } from './message.service'
import { MessageNavComponent } from "./message-nav/message-nav.component";
import { FilterByTextPipe } from "./message-filter.pipe";

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    MessageNavComponent,
    FilterByTextPipe
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent,
    MessageNavComponent
  ],
  providers: [MessageService]
})

export class MessagesSharedModule {}