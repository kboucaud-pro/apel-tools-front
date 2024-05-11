import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Classroom } from "../models/Classroom.model";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class ClassroomsService {
	constructor(
		private http: HttpClient
	) {
	}

	public getAllClassrooms(): Observable<Classroom[]> {
		return this.http.get<Classroom[]>('/api/classroom').pipe(
			catchError(this.handleError)
		);
	}

	public postNewClassroom(name: string) {
		let newClassroom = new Classroom(name);

		return this.http.post<Classroom>('/api/classroom', newClassroom).pipe(
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(
				`Backend returned code ${error.status}, body was: `, error.error);
		}
		// Return an observable with a user-facing error message.
		return throwError(() => new Error('Something bad happened; please try again later.'));
	}
}