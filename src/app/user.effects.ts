import { Injectable, effect } from '@angular/core';
import { Actions, EffectSources, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { IUser } from './user/user';
import { UserService } from './user.service';
import * as userActions from './user.actions';
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.UserActionTypes.LoadUsers),
      mergeMap((action) =>
        this.userService.getUsers().pipe(
          map(
            (users: IUser[]) =>
              new userActions.LoadUsersSuccess({ data: users })
          ),
          catchError((err) =>
            of(new userActions.LoadUsersFailure({ error: err }))
          )
        )
      )
    );
  });
}
