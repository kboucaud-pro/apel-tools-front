import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClassroomsService } from '../../core/services/Classrooms.service';
import { map, Observable, tap } from 'rxjs';
import { Classroom } from '../../core/models/Classroom.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.scss'
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
  faGroup = faPeopleGroup;


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

  onSubmitForm(form: NgForm) {
    if (this.classroomName.length > 0) {
      this.classroomService.postNewClassroom(this.classroomName).pipe(map((element) => {
        this.classroomList.push(element);
        this.classroomName = "";
      })).subscribe();
    }
  }
}
