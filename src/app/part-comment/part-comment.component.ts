import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-part-comment',
	templateUrl: './part-comment.component.html',
	styleUrls: ['./part-comment.component.css']
})
export class PartCommentComponent implements OnInit {

	@Input() data: any;
	child = [];

	constructor() {
	}

	ngOnInit() {

		if(this.data.children != null) {
			// Todo: Protect against children not being an array (IE: Single comment object, etc...)
			this.child = this.data.children.slice();
		}

	}

	isEmpty(obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}

}