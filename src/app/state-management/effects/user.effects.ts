//https://angularfirebase.com/lessons/firebase-with-angular-ngrx-redux/#post-effects-ts

import {Injectable}                 from '@angular/core';
import {Effect, Actions}            from '@ngrx/effects';
import {Observable}                 from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";

import * as userActions from '../actions/user.actions';
import * as firebase from 'firebase/app';
import {User} from "../models/user";

export type Action = userActions.Actions;
import 'rxjs';

// import {AuthenticateSuccessful, ActionTypes} from '../actions/user.actions';
// import * as firebase from 'firebase/app';
// import {of}                         from 'rxjs/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/delay';
// import {AuthService} from "../../services/auth.service";
// import {AngularFireAuth} from "angularfire2/auth";
// import * as postActions from '../actions/post.actions';

@Injectable()
export class UserEffects {

	constructor(private actions: Actions, private afAuth: AngularFireAuth) {
	}

	@Effect()
	getUser: Observable<Action> = this.actions.ofType(userActions.ActionTypes.GET_USER)

		// Map Action to payload information
		.map((action: userActions.GetUser) => action.payload)

		// Grab the Auth State from Firebase
		.switchMap(payload => this.afAuth.authState)

		.map(function(authData) {
			if(authData) {
				const user = new User(authData.uid, authData.displayName);
				return new userActions.Authenticated(user);
			}
			else {
				return new userActions.NotAuthenticated();
			}
		});
		// TODO: isn't Auth Error an observable already?
		// .catch((err)=> Observable.of(new userActions.AuthError()));

	//
	@Effect()
	login: Observable<Action> = this.actions.ofType(userActions.ActionTypes.FACEBOOK_LOGIN)

		// Map Action down to payload information
		.map((action: userActions.FacebookLogin) => action.payload)

		.switchMap(payload => {
			return Observable.fromPromise(this.facebookLogin());
		})

		.map(credentials => {
			console.log(credentials);
			return new userActions.GetUser();
		})

		// .catch(err => {
		// 	// return new userActions.GetUser();
		// 	return Observable.of(new userActions.GetUser());
		// 	// return new userActions.AuthError();
		// })

		// .catch(err => {
		// 	return Observable.of(new userActions.AuthError({error: err}));
		// }
		// );
	//
	//
	// @Effect()
	// logout: Observable<Action> = this.actions.ofType(userActions.ActionTypes.LOGOUT)
	//
	// // Map Action down to payload information
	// 	.map((action: userActions.Logout) => action.payload)
	//
	// 	.switchMap(payload => {
	// 		return Observable.of(this.afAuth.auth.signOut());
	// 	})
	//
	// 	.map(authData => {
	// 		return new userActions.NotAuthenticated();
	// 	})
	//
	// 	.catch(err => {
	// 		return Observable.of(new userActions.AuthError({error: err}));
	// 	});

	protected facebookLogin(): any {
		const provider = new firebase.auth.FacebookAuthProvider();
		return this.afAuth.auth.signInWithPopup(provider);
	}
}



//
// @Effect()
// login: Observable<any> = this.actions.ofType(ActionTypes.AUTHENTICATE)
// 	.switchMap(payload => {
// 		console.log('inside login');
// 		return this.googleLogin()
// 			.then(function (result) {
// 				console.log('yess');
// 				// This gives you a Google Access Token. You can use it to access the Google API.
// 				var token = result.credential.accessToken;
// 				// The signed-in user info.
// 				var user = result.user;
// 				console.log(user);
// 				return Observable.of(new AuthenticateSuccessful(user));
// 				// ...
// 			}).catch(function (error) {
// 				console.log('nooo');
// 				// Handle Errors here.
// 				var errorCode = error.code;
// 				var errorMessage = error.message;
// 				// The email of the user's account used.
// 				var email = error.email;
// 				// The firebase.auth.AuthCredential type that was used.
// 				var credential = error.credential;
// 				// ...
// 				return Observable.of(new AuthenticateSuccessful(errorCode));
// 			});
// 	});
// console.log('after test');
// console.log(typeof test);
// return Observable.of(new AuthenticateSuccessful(test.currentUser()));
// .map( credential => {
// 	// successful login
// 	return new userActions.GetUser();
// })
// .catch(err => {
// 	return Observable.of(new userActions.AuthError({error: err.message}));
// });
// 	private
// 	googleLogin(): any {
// 		console.log('inside google login');
// 		// const provider = this._firebaseAuth.;
// 		return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
//
// 		// this.afAuth.auth.signInWithPopup(provider);
// 	}
// @Effect()
// public authenticate: Observable<any> = this.actions
// 	.ofType(ActionTypes.SIGN_IN_ATTEMPT)
// 	.debounceTime(500)
// 	// .map(toPayload)
// 	.switchMap(payload => {
// 		return Observable.of(this.authService.signInWithFacebook())
// 			.map(user => new AuthenticateSuccessful(user))
// 			.catch(error => Observable.of(null));
// 			// .catch(error => Observable.of(new AuthenticationErrorAction({ error: error })));
// 	});

// signIn: Observable<any> = this.actions.ofType(ActionTypes.AUTHENTICATE)
// 	.delay(2000) // delay to show spinner
// 	.map(function (action: any) {
// 		console.log('hi');// action.payload
// 	})

// .mergeMap(payload => this.db.object(payload))
// .map(post => {
// 	post.pushKey = post.$key;
// 	return new postActions.GetPostSuccess(post);
// });

// getPost: Observable<Action> = this.actions.ofType(postActions.GET_POST)
// 	.map((action: postActions.GetPost) => action.payload )
// 	.delay(2000) // delay to show spinner
// 	.mergeMap(payload => this.db.object(payload))
// 	.map(post => {
// 		post.pushKey = post.$key;
// 		return new postActions.GetPostSuccess(post);
// 	});
// @Effect()
// voteUpdate: Observable<Action> = this.actions.ofType(postActions.VOTE_UPDATE)
// 	.map((action: postActions.VoteUpdate) => action.payload )
// 	.mergeMap(payload => of(this.db.object('posts/' + payload.post.pushKey)
// 		.update({
// 			votes: payload.post.votes + payload.val
// 		})))
// 	.map(() => new postActions.VoteSuccess())
// 	.catch(err => of (new postActions.VoteFail( { error: err.message } )) );