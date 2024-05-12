import { Student } from "./Student.model";

export class Classroom {
	constructor(
		public name: string,
		public id?: number,
		public students?: Student[],
	) {
	}
}