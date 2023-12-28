import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineForkComponent } from './combine-fork.component';

describe('CombineForkComponent', () => {
  let component: CombineForkComponent;
  let fixture: ComponentFixture<CombineForkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombineForkComponent]
    });
    fixture = TestBed.createComponent(CombineForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
