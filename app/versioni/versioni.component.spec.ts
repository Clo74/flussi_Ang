import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersioniComponent } from './versioni.component';

describe('VersioniComponent', () => {
  let component: VersioniComponent;
  let fixture: ComponentFixture<VersioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
