import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FilterTextComponent } from './filter-text.component';

@NgModule ({
    imports: [ 
        CommonModule,
        FormsModule ],
    declarations: [FilterTextComponent],
    exports: [
        CommonModule,
        FormsModule],
    providers: []
})

export class SharedModule{}