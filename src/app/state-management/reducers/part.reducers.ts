// counter.ts
import {Action} from '@ngrx/store';

import {ActionTypes} from '../actions/part.actions'

import {Part} from '../models/part';
import {Actions} from '../actions/part.actions';

export interface State {
	priorityFilter: number;
	parts: Part[];
}

const partsList: Part[] =
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

const initialState: State = {
	priorityFilter: 0,
	parts: partsList
};


export function partReducer(state = initialState, action: Actions) {

	switch (action.type) {
		case ActionTypes.ADD_PART:

			//TODO: Currently Creating random part.  Replace this with payload
			return Object.assign({}, state, {parts:[createPart(), ... state.parts]});

		case ActionTypes.SET_PRIORITY_FILTER:

			var partStatus = action.payload;

			return Object.assign({}, state, {priorityFilter: partStatus});

		default:
			return state;
	}
}

function createPart() {

	var randomNum = Math.floor(Math.random() * 10000);

	var newPart: Part = {
		id: randomNum,
		name: "Part" + randomNum,
		number: String(randomNum),
		assemblyId: 0,
		priority: 0
	};

	return newPart;

}

// export interface State { //TODO: Generic State type as described in @ngrx/entity
// 	ids: string[];
// 	entities: {[id: string]: Part};
// 	// selectedBookId: string | null;
// }
// ;

// const initialState: State = {
// 	ids: [],
// 	entities: {}
// };