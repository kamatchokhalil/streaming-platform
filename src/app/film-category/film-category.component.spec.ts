import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCategoryComponent } from './film-category.component';

describe('FilmCategoryComponent', () => {
  let component: FilmCategoryComponent;
  let fixture: ComponentFixture<FilmCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
