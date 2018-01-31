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

import {RouterModule} from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { partReducer } from './state-management/reducers/part.reducers';

import { appRoutes } from './routes';

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
			{enableTracing: false} // <-- debugging purposes only
		),
		StoreModule.forRoot({ part: partReducer }),
		StoreDevtoolsModule.instrument({
			maxAge: 25 //  Retains last 25 states
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
