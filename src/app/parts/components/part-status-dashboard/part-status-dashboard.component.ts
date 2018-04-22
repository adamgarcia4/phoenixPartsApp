import {Component, OnInit, OnChanges} from '@angular/core';

import {Part} from '../../../state-management/models/part';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AddPart, SetPriorityFilter} from '../../../state-management/actions/part.actions';
import {withLatestFrom, map} from 'rxjs/operators';


@Component({
	selector: 'app-part-status-dashboard',
	templateUrl: 'part-status-dashboard.component.html',
	styleUrls: ['part-status-dashboard.component.css']
})
export class PartStatusDashboardComponent implements OnInit {

	filteredStatus$: any;

	state$: Observable<any>;

	parts$: Observable<Part>;

	filteredPartsList$: Observable<Part>;

	data: Part[] =
		[
			{
				"id": 100,
				"name": "Part 100",
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

	constructor(private store: Store<any>) {

		this.state$ = store.select('part');

		// Subscription when new parts arrive.  Unfiltered
		this.parts$ = this.state$.map(function (state) {
			// console.log('Parts are: ');
			// console.log(state.parts);
			return state.parts;
		});

		// Filtered Status for part filtering
		this.filteredStatus$ = this.state$.map(function (state) {
			// console.log('priority filter is: ' + state.priorityFilter);
			return state.priorityFilter;
		});

		// Filtered Parts List.  This configuration updates filtered list whenever a new priority value is emitted
		// https://stackoverflow.com/questions/17745478/filter-an-observable-using-values-from-another-observable
		// https://www.learnrxjs.io/operators/combination/withlatestfrom.html
		this.filteredPartsList$ = this.parts$.pipe(
			withLatestFrom(this.filteredStatus$),
			map(([parts, filterNum]) => {

				return parts.filter(function (part) {
					return part.priority == filterNum;
				});
			})
		);
	}

	ngOnInit() {

	}

	updatePartsList() {
		// this.filterPartStatus(this.data, this.filteredStatus);
	}

	setFilteredStatus(status) {
		console.log('filtered Status updating... : ' + status);
		this.store.dispatch(new SetPriorityFilter(status));
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
