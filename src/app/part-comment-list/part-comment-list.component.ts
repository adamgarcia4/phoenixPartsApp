import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-part-comment-list',
	templateUrl: './part-comment-list.component.html',
	styleUrls: ['./part-comment-list.component.css']
})
export class PartCommentListComponent implements OnInit {

	data;

	constructor() {
	}

	ngOnInit() {
		this.data = {
			imgURL: "https://bootdey.com/img/Content/user_1.jpg",
			date: "Dec 19, 2014 ",
			name: "JohnDoe",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sapien odio, sit amet",
			children: [
				{
					imgURL: "https://bootdey.com/img/Content/user_2.jpg",
					date: "Dec 20, 2014 ",
					name: "Alice",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sapien odio, sit amet"
				},
				{
					imgURL: "https://bootdey.com/img/Content/user_2.jpg",
					date: "Dec 20, 2014 ",
					name: "Alice",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a sapien odio, sit amet"
				}
			]
		}
	}

}
