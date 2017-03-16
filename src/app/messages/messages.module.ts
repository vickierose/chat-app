import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesSharedModule } from './shared';

@NgModule ({
    imports: [ 
        CommonModule,
        MessagesSharedModule
        ],
    declarations: [],
    exports: [],
    providers: []
})

export class MessagesModule{}