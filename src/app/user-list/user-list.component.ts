import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { UserService } from '../services/user.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    LoadingSpinnerComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('fadeOutAnimation', [
      state('in', style({ opacity: 1 })),
    

      transition(':leave', [
        animate('750ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Array to store user data
  isLoading = false; // Indicates if data is being loaded
  error: string | null = null; // Stores error messages if any

  constructor(private userService: UserService) {}

  // Called on component initialization
  ngOnInit(): void {
    this.loadUsers(); // Load initial users
  }

  /**
   * Fetches new users from the API and appends them to the existing list.
   */
  loadUsers(): void {
    this.isLoading = true; // Show loading spinner
    this.error = null; // Clear previous errors

    this.userService.getUsers(10).subscribe(
      (response: { results: any[] }) => {
        const newUsers = response.results.map((user: any) => ({
          ...user,
          removed: false, // Property to handle animations (if any)
        }));
        this.users = [...this.users, ...newUsers]; // Append new users to the list
        this.isLoading = false; // Hide loading spinner
      },
      (err: any) => {
        console.error('Error loading users:', err);
        this.error = 'Failed to load users. Please try again.'; // Set error message
        this.isLoading = false; // Hide loading spinner
      }
    );
  }

  
  //  Removes a user from the list by index

  removeUser(index: number): void {
    if (index >= 0 && index < this.users.length) {
      this.users.splice(index, 1); // Remove user from the array
    }
  }
}