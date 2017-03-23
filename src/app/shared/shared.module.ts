import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FilterTextComponent } from './filter-text.component';
import { HighlightDirective } from './highlight.directive'

@NgModule ({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule ],
    declarations: [
        FilterTextComponent,
        HighlightDirective
        ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HighlightDirective],
    providers: []
})

export class SharedModule{}