// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class UserService {

	constructor(private store: Store<any>, private http: HttpClient) {
	}

	registerUser(userInfo): Observable<any> {
		return this.http.post('http://localhost:3000/register',userInfo);
	}
}