import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import {AddPart} from "../state-management/actions/part.actions";

import {GetUser, FacebookLogin} from '../state-management/actions/user.actions'

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private user: Observable<firebase.User>;

	userDetails: any;


	constructor(private store: Store<any>, private _firebaseAuth: AngularFireAuth) {
		this.user = _firebaseAuth.authState;

		this.user.subscribe(
			(user) => {
				if (user) {
					this.userDetails = user;
				}
				else {
					console.log('logout');
					this.userDetails = null;
				}
			}
		);
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

	facebookSignin() {
		console.log('buttonPressed');
		this.store.dispatch(new FacebookLogin());
		// this.store.dispatch(new Authenticate('payload'));
	}

	signOutWithTwitter() {
		return this._firebaseAuth.auth.signOut();
	}

}
