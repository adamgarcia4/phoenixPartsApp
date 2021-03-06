import {HomePageComponent} from './home-page/home-page.component';

import {PartStatusDashboardComponent} from './part-status-dashboard/part-status-dashboard.component';

import {PartViewComponent} from "./part-view/part-view.component";

import {Routes} from '@angular/router';
import {PartMachineComponent} from "./part-machine/part-machine.component";
import {PartListViewComponent} from "./part-list-view/part-list-view.component";


export const appRoutes: Routes = [

	{
		path: '', component: PartListViewComponent
	},
	{
		path: 'dashboard', component: PartStatusDashboardComponent,
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
		path: '**', component: PartListViewComponent
	}
];