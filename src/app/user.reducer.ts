import { createReducer, on } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';
import { IUser } from './user/user';

export const userFeatureKey = 'usersState';

export interface State {
  users: IUser[];
  error: string;
}

export const initialState: State = {
  users: [
    // {
    //   balance: '$3,946.45',
    //   picture: 'http://placehold.it/32x32',
    //   age: 23,
    //   name: 'Harsh Vardhan',
    //   gender: 'male',
    //   company: 'Facebook',
    //   email: 'harsh@gmail.com',
    // },
  ],
  error: '',
};

export const reducer = createReducer(initialState);
