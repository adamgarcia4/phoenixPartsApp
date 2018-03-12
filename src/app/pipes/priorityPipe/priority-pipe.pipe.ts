import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'priorityPipe'
})
export class PriorityPipe implements PipeTransform {

	priorityMap = {
		'0': 'Low',
		'1': 'Medium',
		'2': 'High'
	};

	transform(value: any, args?: any): any {
		return (this.priorityMap[value]!=undefined)?this.priorityMap[value]:'NA';
	}

}
