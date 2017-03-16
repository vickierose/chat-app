import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent
  ],
  providers: []
})

export class MessagesSharedModule {}