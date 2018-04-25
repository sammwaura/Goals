import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Goals } from '../goals';
import { GoalService } from '../goals/goal.service';
import { AlertsService } from '../alert-service/alerts.service';
import {QuoteRequestService} from '../quote-http/quote-request.service';
import { HttpClient } from '@angular/common/http'
import { Quote } from '../quote-class/quote';
import { Router} from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers: [GoalService,QuoteRequestService], // add the providers to the component
  styleUrls: ['./goal.component.css']

})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertsService;
  quote: Quote;
  goToUrl(id){
    this.router.navigate(['/goals',id])
  }



  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if (toDelete) {
        this.goals.splice(index, 1)
        this.alertService.alertMe("Goal has been deleted")
      }
    }

  }

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toogleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  constructor(goalService: GoalService, alertService: AlertsService, private http: HttpClient, private quoteService:QuoteRequestService,private router:Router) {
    this.goals = goalService.getGoals()

    this.alertService = alertService; //make the service available to the class
  }
  ngOnInit() {

    this.quoteService.quoteRequest()
    this.quote=this.quoteService.quote

    

    interface ApiResponse {
      quote: string;
      author: string
    }
    this.http.get<ApiResponse>("https://talaikis.com/api/quotes/random/").subscribe(data => {
      // Successful API request.
      this.quote = new Quote(data.quote, data.author)
    }, err => {
      this.quote = new Quote("Never, never, never give up.", "winston churchill")
      console.log("Error occured")
    })
  }
}

