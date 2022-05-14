import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCompareComponent } from './character-compare.component';

describe('CharacterCompareComponent', () => {
  let component: CharacterCompareComponent;
  let fixture: ComponentFixture<CharacterCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
