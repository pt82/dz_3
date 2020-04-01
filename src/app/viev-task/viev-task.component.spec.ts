/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VievTaskComponent } from './viev-task.component';

describe('VievTaskComponent', () => {
  let component: VievTaskComponent;
  let fixture: ComponentFixture<VievTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VievTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VievTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
