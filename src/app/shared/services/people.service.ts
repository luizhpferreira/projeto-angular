import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: "Ivan",
        lastName: "Soares",
        age: 17
      },
      {
        firstName: "Carlos",
        lastName: "Soares",
        age: 37
      },
      {
        firstName: "Paulo",
        lastName: "Soares",
        age: 47
      },
      {
        firstName: "Maria",
        lastName: "Soares",
        age: 50
      }
    ]
    return of(peopleArray)
  }
}
