// import { UserService } from './user/user.service';
// import { UserActions } from './user.actions';
import { Injectable } from '@angular/core';
import { Actions, EffectSources, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import * as fromUser from './user.selectors';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IUser } from './user/user';
import { UserService } from './user.service';
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.UserActionTypes.LoadUsers),

    mergeMap((action) =>
      this.userService

        .getUsers()

        .pipe(
          map(
            (users: IUser[]) =>
              new UserActions.LoadUsersSuccess({ data: users })
          ),

          catchError((error) =>
            of(new UserActions.LoadUsersFailure({ error: error }))
          )
        )
    )
  );
}
