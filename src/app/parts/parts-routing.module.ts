import {NgModule} from '@angular/core';



import {Routes, RouterModule} from '@angular/router';
import {PartListViewComponent} from "./components/part-list-view/part-list-view.component";
import {PartStatusDashboardComponent} from "./components/part-status-dashboard/part-status-dashboard.component";
import {PartMachineComponent} from "./components/part-machine/part-machine.component";
import {PartViewComponent} from "./components/part-view/part-view.component";




const routes: Routes = [
	{
		path: '', component: PartListViewComponent
	},
	{
		path: 'dashboard', component: PartStatusDashboardComponent
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

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class PartsRoutingModule {
}
