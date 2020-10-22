import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseDetailComponent } from './showcase-detail.component';

describe('ShowcaseDetailComponent', () => {
  let component: ShowcaseDetailComponent;
  let fixture: ComponentFixture<ShowcaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
