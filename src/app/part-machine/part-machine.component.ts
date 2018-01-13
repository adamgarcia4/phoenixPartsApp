import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-part-machine',
	templateUrl: './part-machine.component.html',
	styleUrls: ['./part-machine.component.css']
})
export class PartMachineComponent implements OnInit {

	machineList;

	constructor() {
	}

	ngOnInit() {
		this.machineList = [
			{
				name: "Bandsaw",
				assigned: "Adam",
				completed: 1
			},
			{
				name: "Mill 1",
				assigned: "Sahar",
				completed: 0
			},
			{
				name: "CNC",
				assigned: "Diego",
				completed: 0
			}
		];
	}

}
