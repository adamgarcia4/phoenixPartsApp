// counter.ts
import {Action} from '@ngrx/store';

import {ActionTypes} from '../actions/user.actions'

import {Actions} from '../actions/user.actions';
import {User} from "../models/user";

export interface State {
	loading: boolean;
	loggedIn: boolean;
	user: any | User | null;
}

const initialState: State = {
	loading: false,
	loggedIn: false,
	user: null
};

export function userReducer(state = initialState, action: Actions) {

	switch (action.type) {

		case ActionTypes.GET_USER:

			console.log('getting user!');
			return Object.assign({}, state, {loading: true});

		case ActionTypes.AUTHENTICATED:
			var loggedInUser = action.payload;
			return Object.assign({}, state, {
				user: loggedInUser,
				loading: false
			});

		case ActionTypes.NOT_AUTHENTICATED:

			return Object.assign({}, state, {
				user: null,
				loading: false
			});

		case ActionTypes.FACEBOOK_LOGIN:

			return Object.assign({}, state, {
				loading: true
			});

		default:
			return state;
	}
}