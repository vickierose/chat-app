import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Http, Response } from '@angular/http';

import { API_CONFIG } from '../../shared/api.config';

@Injectable()
export class ChatNewService {
    private search$: BehaviorSubject<string> = new BehaviorSubject('');
    
    constructor(private http: Http){}

    public setSeachValue(value: string): void {
        this.search$.next(value);
    }

    public getSearchValue(): BehaviorSubject<string> {
        return this.search$;
    }

    public getUsers(): Observable<any>{
       return this.http.get(API_CONFIG.USERS).map((res: Response)=> res.json()); 
    }
}