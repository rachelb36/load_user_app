import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Angular Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'; // Use MatDividerModule

// Component imports
import { AppComponent } from './app.component'; // Main App Component
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, // Declare the main app component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Enables Angular animations
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule, // Import the correct module
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap the main app component
})
export class AppModule {}