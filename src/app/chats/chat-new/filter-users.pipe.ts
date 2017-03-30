import { Pipe, PipeTransform } from '@angular/core';
import { User } from "../../auth/users/user.model";

@Pipe({
    name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {
    public transform(users: User[], filterValue: string){
        return users ? 
        users.filter(user => {
        let pattern = new RegExp(filterValue.trim(), 'i')
        return !!user.username.match(pattern)
    })
    : users;
    }
}