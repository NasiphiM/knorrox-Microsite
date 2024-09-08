import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnswerOption, QuestionModel} from "../../shared/models/question-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent  implements OnInit {
  private _question: QuestionModel | null = null;
  private selectedAnswer: AnswerOption | null = null;
  isAnswered: boolean = false;
  optionNumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  get question (): QuestionModel | null{
    return  this._question;
  }
  @Input() set question(value: QuestionModel | null){
    this._question = value;
    this.isAnswered = false;
    this.selectedAnswer = null;
  }
  @Input() questionNo: number = 1;
  @Output() next: EventEmitter<AnswerOption> = new EventEmitter<AnswerOption>();
  constructor(
    private route: Router
  ) { }

  ngOnInit() {}

  onSelected(answerOption: AnswerOption){
    this.isAnswered = true;
    this.selectedAnswer = answerOption;
  }

  onNext(){
    if(this.selectedAnswer != null){
      this.next.emit(this.selectedAnswer);
    }
    else{
      this.isAnswered = false;
      this.route.navigate(['/start-new']);
      //show finished -> start New with button ?
    }
  }

}
