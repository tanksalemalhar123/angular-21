import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sendercomponent } from './sendercomponent';

describe('Sendercomponent', () => {
  let component: Sendercomponent;
  let fixture: ComponentFixture<Sendercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sendercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sendercomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
