import { Injectable } from '@angular/core';
import { CHATS } from './mock-chats'
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from "./chat.model";

@Injectable()
export class ChatService {
    private search$: BehaviorSubject<string> = new BehaviorSubject('');
    
    getChats(): Observable<Chat[]>{
        return Observable.create(observer => observer.next(CHATS));
    }

    public setSearchValue(value: string): void {
        this.search$.next(value);
    }

    public getSearchValue(): BehaviorSubject<string> {
        return this.search$;
    }
}