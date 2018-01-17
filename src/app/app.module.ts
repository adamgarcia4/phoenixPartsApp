import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HeaderComponent} from './header/header.component';
import {PartViewComponent} from './part-view/part-view.component';
import {PartCommentComponent} from './part-comment/part-comment.component';
import {PartMachineComponent} from './part-machine/part-machine.component';
import {CommentComponent} from './comment/comment.component';
import {PartCommentListComponent} from './part-comment-list/part-comment-list.component';
import {PartStatusDashboardComponent} from './part-status-dashboard/part-status-dashboard.component';
import {BsDropdownModule} from 'ngx-bootstrap';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
	{
		path: '', component: PartStatusDashboardComponent
	},
	{
		path: 'dashboard', component: HomePageComponent
	}
];


@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		HeaderComponent,
		PartViewComponent,
		PartCommentComponent,
		PartMachineComponent,
		CommentComponent,
		PartCommentListComponent,
		PartStatusDashboardComponent
	],
	imports: [
		BrowserModule,
		BsDropdownModule.forRoot(),
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true} // <-- debugging purposes only
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
