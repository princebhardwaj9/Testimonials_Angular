import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbackview',
  templateUrl: './feedbackview.component.html',
  styleUrls: ['./feedbackview.component.css']
})
export class FeedbackviewComponent implements OnInit {
  
  name:string;
  experince:string;
  public feedback: any[][]=[[this.name,this.experince]];

  constructor() { }

  ngOnInit(): void {
  }

  addFeedback(name,experince){
    this.feedback.push([name,experince]);
  }
}
