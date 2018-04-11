import {HomePageComponent} from './home-page/home-page.component';

import {PartStatusDashboardComponent} from './part-status-dashboard/part-status-dashboard.component';

import {PartViewComponent} from "./part-view/part-view.component";

import {Routes} from '@angular/router';
import {PartMachineComponent} from "./part-machine/part-machine.component";
import {PartListViewComponent} from "./part-list-view/part-list-view.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {
	AuthGuardService as AuthGuard
} from './guards/auth/auth-guard.service';
import {LoginFormComponent} from "./login-form/login-form.component";



export const appRoutes: Routes = [
	{
		path: '', component: LoginFormComponent
	},
	{
		path: '', component: PartListViewComponent
	},
	{
		path: 'login', component: LoginPageComponent
	},
	{
		path: 'dashboard', component: PartStatusDashboardComponent,
		// canActivate: [AuthGuard]
	},
	{
		path: 'projectView', component: PartMachineComponent
	},
	{
		path: 'machine', component: PartMachineComponent
	},
	{
		path: 'part/:id', component: PartViewComponent
	},
	{
		path: '**', component: PartStatusDashboardComponent
	}
];