import {QuestionnaireQuestionAnswerModel} from "./questionnaire-question-answer-model";


export interface QuestionnaireQuestionAnswerOptionModel{
  questionnaireQuestionAnswerOptionID: number;
  answerOption: string;
  sortOrder: number;
  inputAnswer: string;
}
