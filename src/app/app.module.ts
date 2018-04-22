import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';

import {BsDropdownModule} from 'ngx-bootstrap';

import {RouterModule} from '@angular/router';

import {appRoutes} from './routes';
import {PartListViewComponent} from "./parts/components/part-list-view/part-list-view.component";

// import {userReducer} from "./state-management/reducers/user.reducers";

/// / import {AuthGuardService} from "./services/auth-service.service";

import { AuthGuardService } from './core/auth-guard.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from "./auth/auth.module";
import {StateManagementModule} from "./state-management/state-management.module";
import {PartsModule} from "./parts/parts.module";
import {UserAvatarComponent} from "./core/header/user-avatar/user-avatar.component";
import {CommonModule} from "@angular/common";


export const COMPONENTS = [
	AppComponent,
	HeaderComponent,
	UserAvatarComponent
];


@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		BrowserModule,
		BsDropdownModule.forRoot(),
		RouterModule.forRoot(
			appRoutes
		),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		FormsModule,
		ReactiveFormsModule,

		AuthModule,
		StateManagementModule,
		PartsModule
	],
	providers: [], //AuthService
	bootstrap: [AppComponent]
})
export class AppModule {
}
