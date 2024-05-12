import { Classroom } from "./Classroom.model";

export class Student {
	constructor(
		public firstName: string,
        public lastName: string,
        public classroom: Classroom,
		public id?: number
	) {
	}
}