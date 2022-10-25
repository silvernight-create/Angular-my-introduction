import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdListComponent } from './hd-list.component';

describe('HdListComponent', () => {
  let component: HdListComponent;
  let fixture: ComponentFixture<HdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
