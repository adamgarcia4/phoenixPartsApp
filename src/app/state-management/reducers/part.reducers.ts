// counter.ts
import {Action} from '@ngrx/store';

import {ActionTypes} from '../actions/part.actions'

import {Part, newPart} from '../models/part';
import {Actions} from '../actions/part.actions';

export interface State {
	priorityFilter: number;
	parts: Part[];
	selectedPart: string;
}

var i = 0;

const partsList: Part[] = [];

// [
// 	{
// 		"id": 0,
// 		"name": "Part 0",
// 		"number": "4-2018-00-001",
// 		"assemblyId": 1,
// 		priority: 0
// 	},
// 	{
// 		"id": 1,
// 		"name": "Part 1",
// 		"number": "4-2018-01-001",
// 		"assemblyId": 1,
// 		priority: 1
// 	},
// 	{
// 		"id": 2,
// 		"name": "Part 2",
// 		"number": "4-2018-00-001",
// 		"assemblyId": 1,
// 		priority: 2
// 	},
// 	{
// 		"id": 3,
// 		"name": "Part 3",
// 		"number": "4-2018-01-001",
// 		"assemblyId": 1,
// 		priority: 3
// 	},
// 	{
// 		"id": 4,
// 		"name": "Part 4",
// 		"number": "4-2018-00-001",
// 		"assemblyId": 1,
// 		priority: 4
// 	},
// 	{
// 		"id": 5,
// 		"name": "Part 5",
// 		"number": "4-2018-01-001",
// 		"assemblyId": 1,
// 		priority: 5
// 	}
// ];

const initialState: State = {
	priorityFilter: 0,
	parts: partsList,
	selectedPart: ''
};


export function partReducer(state = initialState, action: Actions) {

	switch (action.type) {
		case ActionTypes.ADD_PART:

			//TODO: Currently Creating random part.  Replace this with payload
			return Object.assign({}, state, {parts: [newPart(), ... state.parts]});

		case ActionTypes.SET_PRIORITY_FILTER:

			var partStatus = action.payload;

			return Object.assign({}, state, {priorityFilter: partStatus});

		case ActionTypes.SET_SELECTED_PART:

			var partNumber = action.payload;

			return Object.assign({}, state, {selectedPart: partNumber});

		case ActionTypes.DELETE_PART:

			var partNumber = action.payload;
			var oldParts = state.parts;
			var newParts = oldParts.filter(function (part) {

				if (part.number === partNumber) {
					return false;
				} else {
					return true;
				}

			});
			return Object.assign({}, state, {parts: newParts});
		default:
			return state;
	}
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