import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import {AddPart} from "../../state-management/actions/part.actions";

import {GetUser, FacebookLogin} from '../../state-management/actions/user.actions'

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {getUserLoggedIn, getUserImg} from "../../state-management/reducers/user.reducers";

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

	private user: Observable<firebase.User>;

	userLoggedIn$: Observable<any>;
	userImg$: Observable<any>;


	constructor(private store: Store<any>, private _firebaseAuth: AngularFireAuth) {
		this.user = _firebaseAuth.authState;

		this.userImg$ = this.store.select(getUserImg);

		this.userLoggedIn$ = this.store.select(getUserLoggedIn);
	}

	ngOnInit() {
	}

	addPart() {

		// Will Replace with actual part info.  Probably gonna be in a diff component anyways.
		var part = {
			"id": 0,
			"name": "Part 0",
			"number": "4-2018-00-001",
			"assemblyId": 1,
			priority: 0
		};

		this.store.dispatch(new AddPart(part));
	}
}
