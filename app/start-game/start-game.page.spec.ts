import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartGamePage } from './start-game.page';

describe('StartGamePage', () => {
  let component: StartGamePage;
  let fixture: ComponentFixture<StartGamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
