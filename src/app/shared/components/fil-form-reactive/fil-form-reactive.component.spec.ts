import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilFormReactiveComponent } from './fil-form-reactive.component';

describe('FilFormReactiveComponent', () => {
  let component: FilFormReactiveComponent;
  let fixture: ComponentFixture<FilFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
