import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomComponent } from './classroom/classroom-list/classroom-list.component';
import { AppComponent } from './app.component';
import { ClassroomPageComponent } from './classroom/classroom-page/classroom-page.component';

export const routes: Routes = [
	{
    path: 'classroom', component: ClassroomComponent,
  },
  {
    path: 'classroom/:id', component: ClassroomPageComponent
  }
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
