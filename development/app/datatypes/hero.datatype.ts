
export class Hero {
	firstName: string;
	lastName: string;
	heroName: string;
	_id: string;
	powers: Array<string>;

	constructor(firstName: string, lastName: string, heroName: string, _id: string){
		this.firstName = firstName;
		this.lastName = lastName;
		this.heroName = heroName;
		this._id = _id;

		console.log("New hero created. || Name: %s %s Hero Name: %s || id: %s", firstName, lastName, heroName, _id)
	}

}