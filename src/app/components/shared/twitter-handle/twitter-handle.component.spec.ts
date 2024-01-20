import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterHandleComponent } from './twitter-handle.component';

describe('TwitterHandleComponent', () => {
  let component: TwitterHandleComponent;
  let fixture: ComponentFixture<TwitterHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterHandleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
