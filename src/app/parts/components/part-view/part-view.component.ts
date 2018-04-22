import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";

import * as fromRoot from '../../../state-management/reducers/part.reducers';
import {Part} from "../../../state-management/models/part";
import {Router} from "@angular/router";

@Component({
	selector: 'app-part-view',
	templateUrl: 'part-view.component.html',
	styleUrls: ['part-view.component.css']
})
export class PartViewComponent implements OnInit, OnDestroy {

	// Member Variables
	selectedPart$: Observable<any>; // Holds access to exact observable used
	selectedPart_: Subscription; // The actual subscription.  Used to Unsubscribe
	selectedPart: Part; // Holds access to the data to be used on the frontend.

	constructor(private _store: Store<any>, private _router: Router) {

		// Slice Selected Part from the state.  The selected part is currently stored in @ngrx, not coming from URL.
		// Which it should.  The proposed functionality is to make an HTTP call on the URL.
		// This allows us to save url state and persist it.
		this.selectedPart$ = _store.select(fromRoot.selectPartSelector);

		// Need to subscribe to this observable to perform redirection logic.
		this.selectedPart_ = this.selectedPart$.subscribe((part) => {

			// Currently, navigating here by URL (no backend) should redirect to home.  Switch when Backend support
			if (part == null) {
				this._router.navigate(['/']);
			}

			// This will store the data that the template should pull from.
			this.selectedPart = part;
			// console.log(this.selectedPart.comments);
		});
	}

	ngOnInit() {
	}

	ngOnDestroy() {

		// Manual subscriptions need to be unsubscribed to.
		// https://goo.gl/ehHYHo
		this.selectedPart_.unsubscribe();
	}
}
