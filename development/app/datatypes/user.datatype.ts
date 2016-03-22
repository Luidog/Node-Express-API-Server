export class Hero {
	firstName: string;
	lastName: string;
	email: string;
	_id: string;

	constructor(firstName: string, lastName: string, email: string, _id: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this._id = _id;

		console.log("User Data for %s %s || Email: %s.", firstName, lastName, email)
	}

}