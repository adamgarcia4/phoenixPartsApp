import {NgModule} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {LoginFormComponent} from "./components/login-form/login-form.component";
import {AuthGuardService} from "../core/auth-guard.service";

const routes: Routes = [
	{
		path: 'register',
		component: LoginFormComponent,
		canActivate: [AuthGuardService]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
	providers: [
		AuthGuardService
	]
})

export class AuthRoutingModule {
}
