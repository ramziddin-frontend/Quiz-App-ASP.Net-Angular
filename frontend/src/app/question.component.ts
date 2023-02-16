import { Component } from "@angular/core";

@Component ({
  templateUrl: './questioncomponent.html',
  selector: 'question'
})

export class QuestionComponent {
    question: string;
    post() {
      console.log(this.question);
    }
}