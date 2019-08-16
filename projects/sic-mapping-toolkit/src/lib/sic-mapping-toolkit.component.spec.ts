import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicMappingToolkitComponent } from './sic-mapping-toolkit.component';

describe('SicMappingToolkitComponent', () => {
  let component: SicMappingToolkitComponent;
  let fixture: ComponentFixture<SicMappingToolkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicMappingToolkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicMappingToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
