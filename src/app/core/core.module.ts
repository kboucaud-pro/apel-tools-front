import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
})
export class CoreModule { 
  constructor (){
    registerLocaleData(fr.default);
  }
}
