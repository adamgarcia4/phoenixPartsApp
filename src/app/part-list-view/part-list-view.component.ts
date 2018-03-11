import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Part} from "../state-management/models/part";

import { SetSelectedPart, DeletePart } from '../state-management/actions/part.actions'

@Component({
	selector: 'app-part-list-view',
	templateUrl: './part-list-view.component.html',
	styleUrls: ['./part-list-view.component.css']
})
export class PartListViewComponent implements OnInit {

	state$: Observable<any>;

	parts$: Observable<Part>;

	constructor(private _store: Store<any>) {

		this.state$ = _store.select('part');

		this.parts$ = this.state$.map(function (state) {
			return state.parts;
		});
	}

	ngOnInit() {
	}

	goToPart(i) {
		this._store.dispatch(new SetSelectedPart(i));

	}

	deletePart(i) {
		this._store.dispatch(new DeletePart(i));
	}
}