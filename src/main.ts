import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { UserListComponent } from './app/user-list/user-list.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes = [
  { path: '', component: UserListComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient() 
  ],
}).catch(err => console.error(err));



