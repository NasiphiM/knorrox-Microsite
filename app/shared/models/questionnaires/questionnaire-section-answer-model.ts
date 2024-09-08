import {QuestionnaireQuestionAnswerModel} from "./questionnaire-question-answer-model";


export interface QuestionnaireSectionAnswerModel{
  questionnaireSectionID: number ;
  answers: QuestionnaireQuestionAnswerModel[];
}
