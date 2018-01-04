/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EcgclaimreportComponent } from './ecgclaimreport.component';

describe('EcgclaimreportComponent', () => {
  let component: EcgclaimreportComponent;
  let fixture: ComponentFixture<EcgclaimreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcgclaimreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcgclaimreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
