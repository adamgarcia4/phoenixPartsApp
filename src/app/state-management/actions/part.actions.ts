import { Action } from '@ngrx/store';
import { Part } from '../models/part';
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
	ADD_PART: type('[Part] Add Part'),
	SET_PRIORITY_FILTER: type('[Part] Set Priority Filter'),
};
//
// export const ActionTypes = {
// 	SEARCH:           type('[Book] Search'),
// 	SEARCH_COMPLETE:  type('[Book] Search Complete'),
// 	LOAD:             type('[Book] Load'),
// 	SELECT:           type('[Book] Select'),
// };

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */


export class AddPart implements Action {
	type = ActionTypes.ADD_PART;
	constructor(public payload: Part) { }
}

export class SetPriorityFilter implements Action {
	type = ActionTypes.SET_PRIORITY_FILTER;
	constructor(public payload: number) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */

export type Actions
	= AddPart | SetPriorityFilter