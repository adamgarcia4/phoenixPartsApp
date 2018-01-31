// counter.ts
import { Action } from '@ngrx/store';
import { ActionTypes,PartActions } from '../actions/part.actions'

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface PartState {
	id: number;
	name: String;
	number: String;
	assemblyId: number;
	priority: number;

}


const initialState: PartState[] =
	[
		{
			"id": 0,
			"name": "Part 0",
			"number": "4-2018-00-001",
			"assemblyId": 1,
			priority: 0
		},
		{
			"id": 1,
			"name": "Part 1",
			"number": "4-2018-01-001",
			"assemblyId": 1,
			priority: 1
		},
		{
			"id": 2,
			"name": "Part 2",
			"number": "4-2018-00-001",
			"assemblyId": 1,
			priority: 2
		},
		{
			"id": 3,
			"name": "Part 3",
			"number": "4-2018-01-001",
			"assemblyId": 1,
			priority: 3
		},
		{
			"id": 4,
			"name": "Part 4",
			"number": "4-2018-00-001",
			"assemblyId": 1,
			priority: 4
		},
		{
			"id": 5,
			"name": "Part 5",
			"number": "4-2018-01-001",
			"assemblyId": 1,
			priority: 5
		}
	];

export function partReducer(state = initialState , action: PartActions) {

	switch (action.type) {
		case ActionTypes.ADD_PART:

			var newPart = {
				id: 1,
				name: 'Part 1',
				number: '1111'
			}
			return [action.payload.part, ...state];

		case RESET:
			return 0;

		default:
			return state;
	}
}
