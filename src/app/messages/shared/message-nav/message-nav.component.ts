import { Component } from "@angular/core";
import { MessageService } from "../message.service";


@Component({
    selector: 'ct-message-nav',
    templateUrl: './message-nav.component.html',
    styleUrls: ['./message-nav.component.scss']
})
export class MessageNavComponent{
    private searchValue: string = '';

    constructor( private service: MessageService){}

     private onSearchValueChange(value: string): void {
    this.service.setSearchValue(value);
     }
}