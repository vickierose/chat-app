import { Injectable } from '@angular/core';
import { MESSAGES } from './mock-messages';
import { BehaviorSubject } from "rxjs/Rx";


export class MessageService {
    private search$: BehaviorSubject<string> = new BehaviorSubject('');

    getAll(chatId){
        const messages = MESSAGES.filter(message => message.chatId ===chatId);
        return Promise.resolve(messages);
    }

    public setSearchValue(value: string): void{
        this.search$.next(value);
    }

    public getSearchValue(): BehaviorSubject<string>{
        return this.search$;
    }
}