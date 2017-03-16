import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule ({
    imports: [ CommonModule,
     ],
    declarations: [
        NavComponent,
        HeaderComponent],
    exports: [NavComponent,
        HeaderComponent],
    providers: []
})

export class CoreModule{}