import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellcComponent } from './shellc.component';

describe('ShellcComponent', () => {
  let component: ShellcComponent;
  let fixture: ComponentFixture<ShellcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
