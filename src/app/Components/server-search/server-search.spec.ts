import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSearch } from './server-search';

describe('ServerSearch', () => {
  let component: ServerSearch;
  let fixture: ComponentFixture<ServerSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
