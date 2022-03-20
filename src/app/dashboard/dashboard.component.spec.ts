import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de : DebugElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message of Alert', () => {
    expect(component.content).toContain('Alert');
  });
  it('should have no of times clicked more than 0', () => {
    expect(component.noOfTimesClickes).toBeGreaterThanOrEqual(0);
  });
  it('should have a button in DOM ', () => {
    expect(fixture.debugElement.query(By.css('button')).nativeElement).toBeTruthy();
  });
  it('should update the no of clicks on each clicks', () => {
    expect(component.noOfTimesClickes).toBeGreaterThanOrEqual(0);
    component.showAlert();
    expect(component.noOfTimesClickes).toBeGreaterThanOrEqual(1);
  });

  it('should asynchronously update the showFlag variable', fakeAsync(()=>{
    expect(component.showFlag).toBeFalsy();
    component.showAlertAsync();
    tick(500);
    expect(component.showFlag).toBeTruthy();
  }));
  
});
