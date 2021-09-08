import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMasteriesComponent } from './champion-masteries.component';

describe('ChampionMasteriesComponent', () => {
  let component: ChampionMasteriesComponent;
  let fixture: ComponentFixture<ChampionMasteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionMasteriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
