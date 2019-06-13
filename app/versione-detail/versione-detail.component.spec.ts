import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersioneDetailComponent } from './versione-detail.component';

describe('VersioneDetailComponent', () => {
  let component: VersioneDetailComponent;
  let fixture: ComponentFixture<VersioneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersioneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersioneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
