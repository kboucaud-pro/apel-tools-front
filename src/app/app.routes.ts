import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomComponent } from './classrooms/classroom-list/classroom-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
	{path: 'classrooms', component: ClassroomComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
