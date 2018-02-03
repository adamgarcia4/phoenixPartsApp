import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import {AddPart} from "../state-management/actions/part.actions";
import {Observable} from "rxjs";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private store: Store<any>) {
	}

	ngOnInit() {
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
