import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("check component name", () => {
    expect(component.componentName).toBe("user")
  });
  it("check component sum Function", () => {
    expect(component.sum()).toBe(100)
    // we can also pass arguments from spec.ts file
    // and make the function receive the in component.ts file.
    // expect(component.sum()).toBe(100)
  });
  it("check h1 tag", () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.user_component').textContent).toContain('user')
  });
});
