import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftslistComponent } from './draftslist.component';

describe('DraftslistComponent', () => {
  let component: DraftslistComponent;
  let fixture: ComponentFixture<DraftslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
