import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampionMasteriesComponent } from './campion-masteries.component';

describe('CampionMasteriesComponent', () => {
  let component: CampionMasteriesComponent;
  let fixture: ComponentFixture<CampionMasteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampionMasteriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampionMasteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
