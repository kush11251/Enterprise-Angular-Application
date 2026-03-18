// main entry point
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withEnabledRouting } from '@angular/router';
import { RouterModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(RouterModule)
  ]
}).catch(err => console.error(err));