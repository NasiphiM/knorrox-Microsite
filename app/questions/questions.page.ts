import { Component, OnInit } from '@angular/core';
import {AnswerOption, QuestionModel} from "../shared/models/question-model";
import {Router} from "@angular/router";
import {QuestionService} from "../shared/services/question.service";
import {AnswerService} from "../shared/services/answer.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  questions: QuestionModel[] = [];
  currentQuestion: number = 0;

  constructor( private router: Router,
      private questionService: QuestionService,
      private answerService: AnswerService
  ){ }

  ngOnInit() {
    //load questions
    this.questionService.getQuestions().subscribe(question =>{
      this.questions = question;
    });
  }

  // reset question and load specific question
  ionViewWillEnter(){
    this.currentQuestion = 0;
    this.answerService.startNewAnswer();
  }

  onNextQuestion(option: AnswerOption){
    this.answerService.addAnswer({
      questionId: this.questions[this.currentQuestion].questionId,
      answerTest: option.answerText
    });

    if(this.currentQuestion == this.questions.length -1 ){
        //route to final score page
      this.router.navigate(['/start-new'])
    }
    else{
      //move to next questiop
      this.currentQuestion++;
    }
  }

}
