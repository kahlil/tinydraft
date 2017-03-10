import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMetadataComponent } from './draft-metadata.component';

describe('DraftMetadataComponent', () => {
  let component: DraftMetadataComponent;
  let fixture: ComponentFixture<DraftMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
