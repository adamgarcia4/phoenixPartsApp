import {HomePageComponent} from './home-page/home-page.component';

import {PartStatusDashboardComponent} from './part-status-dashboard/part-status-dashboard.component';

import {Routes} from '@angular/router';

export const appRoutes: Routes = [
	{
		path: '', component: PartStatusDashboardComponent
	}, {
		path: 'dashboard', component: HomePageComponent
	}, {
		path: '**', component: HomePageComponent
	}
];