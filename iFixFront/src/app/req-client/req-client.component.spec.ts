import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqClientComponent } from './req-client.component';

describe('ReqClientComponent', () => {
  let component: ReqClientComponent;
  let fixture: ComponentFixture<ReqClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
