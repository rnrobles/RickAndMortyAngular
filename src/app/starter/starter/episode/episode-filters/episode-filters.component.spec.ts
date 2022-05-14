import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeFiltersComponent } from './episode-filters.component';

describe('EpisodeFiltersComponent', () => {
  let component: EpisodeFiltersComponent;
  let fixture: ComponentFixture<EpisodeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
