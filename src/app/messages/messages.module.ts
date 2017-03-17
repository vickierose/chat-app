import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesSharedModule } from './shared';
import { MessageService } from './shared/message.service';

@NgModule ({
    imports: [ 
        CommonModule,
        MessagesSharedModule
        ],
    declarations: [],
    exports: [],
    providers: [MessageService]
})

export class MessagesModule{}