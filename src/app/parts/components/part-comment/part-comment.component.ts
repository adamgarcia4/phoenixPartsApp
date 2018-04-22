import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-part-comment',
	templateUrl: 'part-comment.component.html',
	styleUrls: ['part-comment.component.css']
})
export class PartCommentComponent implements OnInit {

	// Member Variables
	@Input('data') partComment: any;

	// Holds child comments.  If empty,
	childComments = [];

	isNewCommentShow: boolean;


	constructor() {
	}

	// We are passed in an array of Part comments.  I need this to display each element of the array.
	// Loop through each element, and display comment meta data. Then, if children, recurse in.
	ngOnInit() {
		console.log(this.partComment);

		// Todo: Protect against children not being an array (IE: Single comment object, etc...)
		if (this.partComment.children != null || this.partComment.children.length() == 0) {
			this.childComments = this.partComment.children.slice();
		}
		this.isNewCommentShow = false;

	}

	isEmpty(obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}

	commentToggle() {
		this.isNewCommentShow = !this.isNewCommentShow;
	}

}