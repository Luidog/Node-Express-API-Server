import { Power } from "./power.datatype"


export class Hero {
	firstName: string;
	lastName: string;
	heroName: string;
	id: string;
	powers: any;

	constructor(obj:any) {
		this.firstName = obj && obj.firstName || null;
		this.lastName = obj && obj.lastName || null;
		this.heroName = obj && obj.heroName || null;
		this.id = obj && obj._id || null;
		this.powers = obj && obj.powers || null;

		console.log("Hero Created for %s %s || Heroname: %s. - ID: %s", this.firstName, this.lastName, this.heroName, this.id)
	}

}