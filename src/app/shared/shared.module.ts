import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FilterTextComponent } from './filter-text.component';

@NgModule ({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule ],
    declarations: [FilterTextComponent],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule],
    providers: []
})

export class SharedModule{}