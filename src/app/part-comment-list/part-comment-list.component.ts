import {Component, OnInit, Input} from '@angular/core';

// Model
import { PartComment } from '../state-management/models/part';


@Component({
	selector: 'app-part-comment-list',
	templateUrl: './part-comment-list.component.html',
	styleUrls: ['./part-comment-list.component.css']
})

export class PartCommentListComponent implements OnInit {

	// Part Comments are passed into this top level Comment Component.
	// This component displays top level info and recurses into children.
	@Input('data') partComments: PartComment[];

	constructor() {
	}

	ngOnInit() {
		console.log(this.partComments);
	}

}
