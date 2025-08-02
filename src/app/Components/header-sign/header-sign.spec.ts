import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSign } from './header-sign';

describe('HeaderSign', () => {
  let component: HeaderSign;
  let fixture: ComponentFixture<HeaderSign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
