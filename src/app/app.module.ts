import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
// Angular Material imports
import { MatButtonModule } from '@angular/material/button'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatDivider } from '@angular/material/divider';


// Component imports
import { AppComponent } from './app.component'; // Main App Component
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,        // Declare the main app component
    UserListComponent,   // Declare the user list component
  ],
  imports: [
    BrowserModule,      
    HttpClientModule,    
    MatButtonModule,    
    MatProgressSpinnerModule, 
    MatCardModule, AppRoutingModule,     
    MatDivider,
  ],
  providers: [],         
  bootstrap: [AppComponent], 
})
export class AppModule {}
