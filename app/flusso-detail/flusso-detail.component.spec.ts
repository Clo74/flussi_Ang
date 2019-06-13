import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlussoDetailComponent } from './flusso-detail.component';

describe('FlussoDetailComponent', () => {
  let component: FlussoDetailComponent;
  let fixture: ComponentFixture<FlussoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlussoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlussoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
