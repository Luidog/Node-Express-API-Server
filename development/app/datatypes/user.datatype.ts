export class User {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	_id: string;

	constructor(obj: any) {
		this.firstName = obj && obj.firstName || null
		this.lastName = obj && obj.lastName || null
		this.username = obj && obj.username || null
		this.email = obj && obj.email || null
		this._id = obj && obj.id || null

		console.log("User Created for %s %s || Username: %s.", this.firstName, this.lastName, this.username)
	}

}