import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartNewPage } from './start-new.page';

describe('StartNewPage', () => {
  let component: StartNewPage;
  let fixture: ComponentFixture<StartNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
