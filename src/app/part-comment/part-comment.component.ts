import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-part-comment',
	templateUrl: './part-comment.component.html',
	styleUrls: ['./part-comment.component.css']
})
export class PartCommentComponent implements OnInit {

	data;

	constructor() {
	}

	ngOnInit() {
		this.data = {
			imgURL: "https://bootdey.com/img/Content/user_1.jpg",
			date: "Dec 19, 2014 ",
			name: "JohnDoe",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sapien odio, sit amet"


		}
	}

}