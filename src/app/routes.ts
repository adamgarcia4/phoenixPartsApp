import {HomePageComponent} from './home-page/home-page.component';

import {PartStatusDashboardComponent} from './part-status-dashboard/part-status-dashboard.component';

import {PartViewComponent} from "./part-view/part-view.component";

import {Routes} from '@angular/router';

export const appRoutes: Routes = [
	{
		path: '', component: PartStatusDashboardComponent
	}, {
		path: 'dashboard', component: HomePageComponent
	},
	{
		path: 'part', component: PartViewComponent
	},
	{
		path: '**', component: PartStatusDashboardComponent
	}
];