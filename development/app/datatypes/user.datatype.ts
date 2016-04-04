export class User {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	id: string;
	role: string;

	constructor(obj: any) {

		console.log(obj)
		this.firstName = obj && obj.firstName || null
		this.lastName = obj && obj.lastName || null
		this.username = obj && obj.username || null
		this.email = obj && obj.email || null
		this.id = obj && obj._id || null
		this.role = obj && obj.role || null

		console.log("User Created for %s %s || Username: %s. - ID: %s", this.firstName, this.lastName, this.username, this.id)
	}

}