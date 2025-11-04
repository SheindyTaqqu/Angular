import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBabys } from '../moduls/ClassBabys';
describe('Babys', () => {
  let component: ClassBabys;
  let fixture: ComponentFixture<ClassBabys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassBabys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBabys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
