// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {

	user$: Observable<any>;
	loggedInStatus: boolean;

	constructor(private store: Store<any>) {
		this.user$ = this.store.select('user');

		var outer = this;

		this.user$.subscribe(function(userData) {
			outer.loggedInStatus = userData.loggedIn;
		});
	}


	public isAuthenticated(): boolean {
		console.log('auth is: ' + this.loggedInStatus);
		return this.loggedInStatus;
	}
}