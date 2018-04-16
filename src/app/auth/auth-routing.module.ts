import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';



import {Routes, RouterModule} from '@angular/router';

import {LoginFormComponent} from "./components/login-form/login-form.component";

const routes: Routes = [
	{
		path: 'logintest',
		component: LoginFormComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class AuthRoutingModule {
}
