import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
	selector: 'app-part-view',
	templateUrl: './part-view.component.html',
	styleUrls: ['./part-view.component.css']
})
export class PartViewComponent implements OnInit {

	state$: Observable<any>;

	selectedPart$: Observable<any>;

	constructor(private _store: Store<any>) {
		this.state$ = _store.select('part');
		this.state$.subscribe(function(test) {
			var select = test.parts.filter(function(testPart) {
				return testPart.number == test.selectedPart
			});
			console.log('selected part is: ');
			console.log(select);

		});

		// this.selectedPart$ = this.state$['selectedPart'].switchMap()
	}

	ngOnInit() {
	}

}
