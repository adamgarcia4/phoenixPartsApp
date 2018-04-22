// User Reducer.ts
import {Action, createFeatureSelector, createSelector} from '@ngrx/store';

import {ActionTypes} from '../actions/user.actions'

import {Actions} from '../actions/user.actions';
import {User} from "../models/user";

export interface UserState {
	loading: boolean;
	loggedIn: boolean;
	data: any | User | null;
}

const initialState: UserState = {
	loading: false,
	loggedIn: false,
	data: null
};

export function userReducer(state = initialState, action: Actions) {

	switch (action.type) {

		case ActionTypes.REGISTER_USER:
			console.log('Registering User');
			return Object.assign({}, state, {loading: true});

		case ActionTypes.GET_USER:

			console.log('getting user!');
			return Object.assign({}, state, {
				loading: true
			});

		case ActionTypes.AUTHENTICATED:

			var loggedInUser = action.payload;
			return Object.assign({}, state, {
				data: loggedInUser.user.user,
				loading: false,
				loggedIn: true
			});

		case ActionTypes.NOT_AUTHENTICATED:

			return Object.assign({}, state, {
				user: null,
				loading: false
			});

		default:
			return state;
	}
}


// Put these top level functions underneath reducers
// Passed into Create Selector Functions
export const userLoading = (state: UserState) => state.loading;
export const userLoggedIn = (state: UserState) => state.loggedIn;
export const userInfo = (state: UserState) => state.data;

export const userImg = (state: User) => state.img;

export const getUserState = createFeatureSelector<UserState>('user');

export const getUser = createSelector(getUserState, userInfo);
export const getUserLoggedIn = createSelector(getUserState, userLoggedIn);
export const getUserImg = createSelector(getUser, userImg);