
export class Hero {
	firstName: string;
	lastName: string;
	heroName: string;
	_id: string;
	powers: any;

	constructor(firstName: string, lastName: string, heroName: string, _id: string, powers: any){
		this.firstName = firstName;
		this.lastName = lastName;
		this.heroName = heroName;
		this._id = _id;
		this.powers = powers;

		console.log("New hero created. || Name: %s %s Hero Name: %s || id: %s", firstName, lastName, heroName, _id)
	}

}