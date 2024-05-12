import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomComponent } from './classroom-list.component';

describe('ClassroomComponent', () => {
  let component: ClassroomComponent;
  let fixture: ComponentFixture<ClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
