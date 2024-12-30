import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { UserListComponent } from './user-list.component';
import { UserService } from '../services/user.service';

describe('UserListComponent', () => {
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']);

    await TestBed.configureTestingModule({
      imports: [UserListComponent, BrowserAnimationsModule],
      providers: [{ provide: UserService, useValue: spy }],
    }).compileComponents();

    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should display a loading spinner while loading', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    const component = fixture.componentInstance;

    userServiceSpy.getUsers.and.returnValue(
      of({
        results: [
          { name: { first: 'John', last: 'Doe' }, picture: { large: '' }, dob: { date: '' } },
        ],
      })
    );

    component.isLoading = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('app-loading-spinner')
    ).toBeTruthy('Loading spinner should be visible');
  });

  it('should load users on init', () => {
    const mockUsers = [
      { name: { first: 'John', last: 'Doe' }, picture: { large: '' }, dob: { date: '' } },
      { name: { first: 'Jane', last: 'Smith' }, picture: { large: '' }, dob: { date: '' } },
    ];

    userServiceSpy.getUsers.and.returnValue(of({ results: mockUsers }));

    const fixture = TestBed.createComponent(UserListComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(userServiceSpy.getUsers).toHaveBeenCalledWith(10);
    expect(component.users.length).toBe(mockUsers.length);
  });
});