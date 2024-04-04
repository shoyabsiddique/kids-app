import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectsPage } from './objects.page';

describe('ObjectsPage', () => {
  let component: ObjectsPage;
  let fixture: ComponentFixture<ObjectsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
