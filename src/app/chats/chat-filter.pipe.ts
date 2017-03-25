import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from "./shared/chat.model";

@Pipe ({
    name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform{
    public transform (chats: Chat[], filterValue: string){
         if (chats) {
            return chats.filter(chat => {
                // let pattern = 
                return chat.name.match(new RegExp(filterValue, 'gi'));
            });
        } else {
            return chats;
        }
    }
}