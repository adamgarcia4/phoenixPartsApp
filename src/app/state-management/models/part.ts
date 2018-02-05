// Part Name
// Part Number
// Part Per Robot
// Parts Quantity Total
// Stock Material
// Cut Lg (in)
// Status
// Drawn By
// Machines Needed
// Stock Ordered
// Part Location

// Unique Part Counter
var i = 0;

export interface Part {
	id: number;
	name: string;
	number: string;
	partsPerRobot?: number;
	quantity?: number;
	stockMaterial?: string;
	cutLg?: string;
	status?: string;
	drawnBy?: string;
	machinesNeeded?: string;
	stockOrdered?: string;
	partLocation?: string;
	assemblyId: number;
	priority: number;

}

export function newPart() {

	var randomNum = Math.floor(Math.random() * 10000);

	var newPart: Part = {
		id: i,
		name: "Part " + randomNum,
		number: '4-2018-01-' + String(randomNum),
		partsPerRobot: 2,
		quantity: 4,
		stockMaterial: 'Aluminum',
		cutLg: '1 in',
		status: 'To Machine',
		drawnBy: 'Adam',
		machinesNeeded: 'Lathe, Mill, Bandsaw',
		stockOrdered: 'yes',
		partLocation: 'B14',
		assemblyId: 0,
		priority: 0
	};

	i++;

	return newPart;

}

// export interface Book {
// 	id: string;
// 	volumeInfo: {
// 		title: string;
// 		subtitle: string;
// 		authors: string[];
// 		publisher: string;
// 		publishDate: string;
// 		description: string;
// 		averageRating: number;
// 		ratingsCount: number;
// 		imageLinks: {
// 			thumbnail: string;
// 			smallThumbnail: string;
// 		};
// 	};
// }