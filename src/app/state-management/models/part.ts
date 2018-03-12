var base64 = require('base-64');
var utf8 = require('utf8');

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

export interface machineNeededEntry {
	completed: boolean;
	name: string;
	assignedTo: string;
}

export interface partComment {
	picURL: string;
	date: string;
	name: string;
	body: string;
}

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
	machinesNeeded?: machineNeededEntry[];
	stockOrdered?: string;
	partLocation?: string;
	assemblyId: number;
	priority: number;
	pictureURL?: string;

}

export function newPart() {

	var randomNum = Math.floor(Math.random() * 1000);

	var number = '4-2018-01-' + String(randomNum);

	var newPart: Part = {
		id: i,
		name: "Part " + randomNum,
		pictureURL: "http://khengineering.github.io/RoboRio/Images/pdpinfo.png",
		number: number,
		partsPerRobot: 2,
		quantity: 4,
		stockMaterial: 'Aluminum',
		cutLg: '1 in',
		status: 'To Machine',
		drawnBy: 'Adam',
		machinesNeeded: [
			{
				completed: false,
				assignedTo: 'Adam',
				name: 'CNC Mill'
			},
			{
				completed: true,
				assignedTo: 'Sahar',
				name: 'Chopsaw'
			},
		],
		stockOrdered: 'yes',
		partLocation: 'B14',
		assemblyId: 0,
		priority: 0
	};

	i++;

	return newPart;

}

export function createHash(textToHash) {
	var bytes = utf8.encode(textToHash);
	var encoded = base64.encode(bytes);
	// console.log(encoded);
	return encoded;
}

export function decodeHash(hash) {
	var bytes = base64.decode(hash);
	var text = utf8.decode(bytes);
	// console.log(text);
	return text;
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