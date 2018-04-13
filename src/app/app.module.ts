import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HeaderComponent} from './header/header.component';
import {PartViewComponent} from './part-view/part-view.component';
import {PartCommentComponent} from './part-comment/part-comment.component';
import {PartMachineComponent} from './part-machine/part-machine.component';
import {PartCommentListComponent} from './part-comment-list/part-comment-list.component';
import {PartStatusDashboardComponent} from './part-status-dashboard/part-status-dashboard.component';
import {BsDropdownModule} from 'ngx-bootstrap';

import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {UserEffects} from './state-management/effects/user.effects';

import {partReducer} from './state-management/reducers/part.reducers';

import {EffectsModule} from '@ngrx/effects';

import {appRoutes} from './routes';
import {PartListViewComponent} from "./part-list-view/part-list-view.component";

import {userReducer} from "./state-management/reducers/user.reducers";
import {LoginPageComponent} from "./login-page/login-page.component";

/// / import {AuthGuardService} from "./services/auth-service.service";

import { AuthGuardService } from './core/auth-guard.service';
// Pipes
import {PriorityPipe} from "./pipes/priorityPipe/priority-pipe.pipe";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from "./auth/auth.module";


export const COMPONENTS = [
	AppComponent,
	HomePageComponent,
	HeaderComponent,
	PartViewComponent,
	PartCommentComponent,
	PartMachineComponent,
	PartCommentListComponent,
	PartStatusDashboardComponent,
	PartListViewComponent,
	LoginPageComponent,

	PriorityPipe
];


@NgModule({
	declarations: COMPONENTS,
	imports: [
		BrowserModule,
		BsDropdownModule.forRoot(),
		RouterModule.forRoot(
			appRoutes
		),
		StoreModule.forRoot(
			{
				part: partReducer,
				user: userReducer
			}),
		StoreDevtoolsModule.instrument({
			maxAge: 25 //  Retains last 25 states
		}),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		EffectsModule.forRoot([UserEffects]),
		FormsModule,
		ReactiveFormsModule,
		AuthModule
	],
	providers: [AuthGuardService], //AuthService
	bootstrap: [AppComponent]
})
export class AppModule {
}
