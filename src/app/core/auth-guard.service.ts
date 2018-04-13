// src/app/auth/auth-guard.service.ts

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';
import {Observable} from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(public router: Router) {}

	canActivate(): Observable<boolean> {

		return Observable.of(true);
	}
}