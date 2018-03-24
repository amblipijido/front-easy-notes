import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteCardComponent } from './add-note-card.component';

describe('AddNoteCardComponent', () => {
  let component: AddNoteCardComponent;
  let fixture: ComponentFixture<AddNoteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
