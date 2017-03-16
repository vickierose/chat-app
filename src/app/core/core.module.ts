import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
// import { ChatsComponent } from '../chats/chats.component'

@NgModule ({
    imports: [ CommonModule,
     ],
    declarations: [
        NavComponent,
        HeaderComponent,
        // ChatsComponent
        ],
    exports: [NavComponent,
        HeaderComponent,
        // ChatsComponent
        ],
    providers: []
})

export class CoreModule{}