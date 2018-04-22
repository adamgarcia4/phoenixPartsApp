// src/app/auth/auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {getUser} from "../state-management/reducers/user.reducers";

@Injectable()
export class AuthGuardService implements CanActivate {



	constructor(public router: Router, public store: Store<any>) {
		this.user$ =  this.store.select(getUser);
		var outer = this;
		this.user$.subscribe(function(data) {
			 outer.data$ = data;
		})
	}

	user$;
	data$;

	canActivate(): Observable<boolean> {

		console.log(this.data$);
		return Observable.of(true);
	}
}