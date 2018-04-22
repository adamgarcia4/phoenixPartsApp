import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {PartCommentListComponent} from "./components/part-comment-list/part-comment-list.component";
import {PartListViewComponent} from "./components/part-list-view/part-list-view.component";
import {PartMachineComponent} from "./components/part-machine/part-machine.component";
import {PartStatusDashboardComponent} from "./components/part-status-dashboard/part-status-dashboard.component";
import {PartCommentComponent} from "./components/part-comment/part-comment.component";

import {PartsRoutingModule} from "./parts-routing.module";
import {PartViewComponent} from "./components/part-view/part-view.component";

// Pipes
import {PriorityPipe} from "./pipes/priorityPipe/priority-pipe.pipe";

export const COMPONENTS = [
	PartViewComponent,
	PartCommentComponent,
	PartCommentListComponent,
	PartListViewComponent,
	PartMachineComponent,
	PartStatusDashboardComponent,

	// Pipes
	PriorityPipe
];

@NgModule({
	imports: [
		CommonModule,
		PartsRoutingModule
	],
	declarations: [
		COMPONENTS
	]
})
export class PartsModule {
}
