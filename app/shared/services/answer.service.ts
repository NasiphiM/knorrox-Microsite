import {Injectable} from "@angular/core";
import {AnswerModel} from "../models/answer-model";
import {CaptureDetailsModel} from "../models/capture-details-model";
import {environment} from "../../../environments/environment";
import {QuestionnaireQuestionAnswerModel} from "../models/questionnaires/questionnaire-question-answer-model";
import {QuestionnaireSavingModel} from "../models/questionnaires/questionnaire-saving-model";


@Injectable({
  providedIn: 'root'
})
export class AnswerService{
  private answers: AnswerModel[] =[];
  private surveyResponseId: number | null = null;
  private details?: CaptureDetailsModel;

  constructor() {
  }

  startNewAnswer(){
    this.answers =[];
  }

  addAnswer(answer: AnswerModel){
    this.answers.push(answer);
  }
  saveAnswers(details: CaptureDetailsModel){}

  getSurveyResponseId() {
    return this.surveyResponseId;
  }
  getSurveyDetails(){
    return this.details;
  }
}
