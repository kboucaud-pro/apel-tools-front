import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClassroomsService } from '../services/Classrooms.service';
import { map, Observable, tap } from 'rxjs';
import { Classroom } from '../models/Classroom.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss'
})
export class ClassroomComponent implements OnInit {

  classroomName: string = "";

  constructor(
    private classroomService: ClassroomsService,
    private router: Router,
  ) {
  }

  title = 'apel-tools-front';
  classroomList: Classroom[] = [];

  ngOnInit(): void {
    this.setClassroomList();
  }

  setClassroomList() {
    this.classroomList = [];
    this.classroomService.getAllClassrooms().pipe(
      map(
        (classrooms) => {
          classrooms.map((element) => {
            this.classroomList.push(element)
          })
        })).subscribe();
  }

  onSubmitForm() {
    if (this.classroomName.length > 0) {
      this.classroomService.postNewClassroom(this.classroomName).pipe(map((element) => {
        this.classroomList.push(element);
        this.classroomName = "";
      })).subscribe();
    }
  }
}
