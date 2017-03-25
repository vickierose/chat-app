import { Pipe, PipeTransform } from '@angular/core';
import { Message } from './message.model';

@Pipe ({
    name: 'filterMessagesByText'
})
export class FilterByTextPipe implements PipeTransform {
    public transform(messages: Message[], filterValue: string): Message[] {
        return messages ?
        messages.filter( message => {
            let pattern = new RegExp(filterValue.trim(), 'i')
            return !!message.text.match(pattern)
        })
        :messages;
    }
}