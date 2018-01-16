import {Component, OnInit, OnChanges} from '@angular/core';


@Component({
	selector: 'app-part-status-dashboard',
	templateUrl: './part-status-dashboard.component.html',
	styleUrls: ['./part-status-dashboard.component.css']
})
export class PartStatusDashboardComponent implements OnInit, OnChanges {

	filteredStatus;

	data =
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

	filteredParts;
	constructor() {
		this.filteredStatus = '1';

		this.filteredParts = this.filterPartStatus(this.data, this.filteredStatus);
	}

	changePriorityFilter(target) {
		this.filteredStatus = target.value;
		this.filteredParts = this.filterPartStatus(this.data, this.filteredStatus);
	}

	// Pass in raw part List and filter status.  Returns filtered list
	filterPartStatus(partList, filterStatus) {
		return partList.filter(function(part) {
			if(part.priority == filterStatus) {
				return true;
			} else {
				return false;
			}
		});
	}

	ngOnInit() {
		this.filteredStatus = 1;
	}

	ngOnChanges() {
	}

}
