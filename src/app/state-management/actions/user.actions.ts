import { Action } from '@ngrx/store';
import { type } from '../util/util';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */

export const ActionTypes = {

	REGISTER_USER: type('[User] Register User'),
	GET_USER: type('[User] Get User'),
	AUTHENTICATED: type('[User] Authenticated'),
	NOT_AUTHENTICATED: type('[User] Not Authenticated'),

	FACEBOOK_LOGIN: type('[User] Facebook Login attempt'),
	LOGOUT: type('[User] Logout'),

	AUTH_ERROR: type('[User] Authentication Error')

};

// AUTHENTICATE: type('[User] Authenticate'),
// 	AUTHENTICATE_SUCCESS: type('[User] Authentication Successful!'),
// 	SIGN_IN_ATTEMPT: type('[User] Attempt Sign in'),
// 	SIGN_IN_USER: type('[User] Signed In'),

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */

export class GetUser implements Action {
	type = ActionTypes.GET_USER;
	constructor(public payload?: any) { }
}

export class Authenticated implements Action {
	type = ActionTypes.AUTHENTICATED;
	constructor(public payload?: any) { }
}

export class NotAuthenticated implements Action {
	type = ActionTypes.NOT_AUTHENTICATED;
	constructor(public payload?: any) { }
}

export class AuthError implements Action {
	type = ActionTypes.AUTH_ERROR;
	constructor(public payload?: any) { }
}

export class FacebookLogin implements Action {
	type = ActionTypes.FACEBOOK_LOGIN;
	constructor(public payload?: any) { }
}

export class Logout implements Action {
	type = ActionTypes.LOGOUT;
	constructor(public payload?: any) { }
}

// export class Authenticate implements Action {
// 	type = ActionTypes.AUTHENTICATE;
// 	constructor(public payload: any) { }
// }
//
// export class AuthenticateSuccessful implements Action {
// 	type = ActionTypes.AUTHENTICATE_SUCCESS;
// 	constructor(public payload: any) { }
// }


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */

export type Actions
	= GetUser | Authenticated | NotAuthenticated | AuthError | FacebookLogin | Logout