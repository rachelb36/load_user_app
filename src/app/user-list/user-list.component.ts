import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../user.service';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

// Import the new spinner component
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDivider,
    MatIconModule,

    // Include your LoadingSpinnerComponent so you can use <app-loading-spinner> in HTML
    LoadingSpinnerComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  isLoading = false;  // renamed to isLoading
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Optionally load users on init:
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.error = null;

    this.userService.fetchUsers().subscribe(
      (response) => {
        this.users = response.results;
        this.isLoading = false;
      },
      (err) => {
        console.error('Error loading users:', err);
        this.error = 'Failed to load users. Please try again.';
        this.isLoading = false;
      }
    );
  }

  removeUser(index: number): void {
    this.users.splice(index, 1);
  }
}