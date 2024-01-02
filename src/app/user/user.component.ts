// import { UserActions } from './../user.actions';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as UserActions from './../user.actions';
import * as fromUser from './../user.selectors';
import { IUser } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  pageTitle = 'Users';
  errorMessage = '';
  users: IUser[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    alert('Hello');
    this.store.dispatch(new UserActions.LoadUsers()); // action dispatch
    this.store.pipe(select(fromUser.getUsers)).subscribe((users) => {
      console.log(users);
      this.users = users;
    }); // selector subscribe

    this.store.pipe(select(fromUser.getError)).subscribe((err) => {
      this.errorMessage = err;
    }); // selector subscribe
  }
}
