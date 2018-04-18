import { Component, OnInit, Input } from '@angular/core';
import { Goal } from './goal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   @Input() goal:Goal;
   constructor() { }
 
    ngOnInit() {
    }

}
