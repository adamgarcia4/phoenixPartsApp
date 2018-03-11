
// Represents Single user info
export interface User {
	uid: string;
	displayName: string;
	loading?: boolean;
	error?: string;
	// email?: string;
	// isAnonymous?: boolean;
	// photoURL?: string;
	// phoneNumber?: string;

}

export class User {
	constructor(public uid: string, public displayName: string) {}

}