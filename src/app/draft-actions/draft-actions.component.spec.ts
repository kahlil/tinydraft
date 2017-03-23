import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftActionsComponent } from './draft-actions.component';

describe('DraftActionsComponent', () => {
  let component: DraftActionsComponent;
  let fixture: ComponentFixture<DraftActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
