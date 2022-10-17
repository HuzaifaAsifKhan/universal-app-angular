import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  map,
  catchError,
  tap,
  distinctUntilChanged,
  mergeMap,
  filter,
  take,
} from 'rxjs/operators';
import {
  Observable,
  of,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost/api';
  private currentUser$: Subject<User> | any = new BehaviorSubject(
    null
  );
  private redirectUrl: string = '/';
  private redirectParams: any = null;


  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.currentUser$
    .pipe(
      distinctUntilChanged(),
      filter((user) => !user),
      mergeMap(() => this.checkCookie())
    )
    .subscribe();
 
  }

  private checkCookie(): Observable<any> {
    return this.http
      .get(`${this.API_URL}/isLoggedIn`, {
        withCredentials: true,
      })
      .pipe(
        catchError(() => of(null)),
        tap((user:any) => this.currentUser$.next(user))
      );
  }
}
