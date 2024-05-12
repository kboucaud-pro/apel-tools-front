import { ClassroomsService } from './../../core/services/Classrooms.service';
import { Component, OnInit } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Classroom } from '../../core/models/Classroom.model';

@Component({
  selector: 'app-classroom-page',
  standalone: true,
  imports: [CoreModule, CommonModule],
  templateUrl: './classroom-page.component.html',
  styleUrl: './classroom-page.component.scss'
})
export class ClassroomPageComponent implements OnInit {

  currentClassroom$: Observable<Classroom>;

  constructor(
    private route: ActivatedRoute,
    private classroomService: ClassroomsService
  ){
  }

  ngOnInit(): void {
    const classroomId = this.route.snapshot.paramMap.get('id');
    if (classroomId) {
      this.currentClassroom$ = this.classroomService.getClassroomById(+classroomId);
  }
}
}
