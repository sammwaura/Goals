import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalComponent } from './goal/goal.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AlertsService } from './alert-service/alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule} from './routing/routing.module'
//Defining routes
const routes: Routes = [
  { path: "goals", component: GoalComponent },
  { path: "about", component: AboutComponent },
  { path:"",redirectTo:"/goals",pathMatch:"full"},
  { path:'**',component:NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    GoalDetailsComponent,
    GoalComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),//normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    RouterModule.forRoot(routes)

  ],

  providers: [AlertsService], //Add service to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
