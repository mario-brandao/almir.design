import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingContentComponent } from './sliding-content.component';

describe('SlidingContentComponent', () => {
  let component: SlidingContentComponent;
  let fixture: ComponentFixture<SlidingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
