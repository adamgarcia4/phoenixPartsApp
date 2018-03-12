import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import * as fromRoot from '../state-management/reducers/part.reducers';
import {Part} from "../state-management/models/part";
import {Router} from "@angular/router";

@Component({
	selector: 'app-part-view',
	templateUrl: './part-view.component.html',
	styleUrls: ['./part-view.component.css']
})
export class PartViewComponent implements OnInit {

	selectedPart$: Observable<any>;
	selectedPart: Part;

	constructor(private _store: Store<any>, private _router: Router) {
		this.selectedPart$ = _store.select(fromRoot.selectPartSelector);
		console.log('selected part is: ');
		var outer = this;
		this.selectedPart$.subscribe(function(part) {

			// Currently, navigating here by URL (no backend) should redirect to home.  Switch when Backend support
			if(part == null) {
				outer._router.navigate(['/']);
			}

			outer.selectedPart = part;
		});
	}

	ngOnInit() {
	}

}
