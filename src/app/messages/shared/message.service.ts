import { Injectable } from '@angular/core';
import { MESSAGES } from './mock-messages';
import { BehaviorSubject, Observable } from "rxjs";
import { Message } from "./message.model";


export class MessageService {
    private search$: BehaviorSubject<string> = new BehaviorSubject('');

    getMessagesForChat(chatId): Observable<Message[]>{
        const messages = MESSAGES.filter(message => message.chatId ===chatId);
        return Observable.create(observer => observer.next(messages))
    }

    public setSearchValue(value: string): void{
        this.search$.next(value);
    }

    public getSearchValue(): BehaviorSubject<string>{
        return this.search$;
    }
}