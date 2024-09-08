import {QuestionnaireSectionAnswerModel} from "./questionnaire-section-answer-model";
export interface QuestionnaireSavingModel{
  questionnaireID: number;
  questionnaireSections: QuestionnaireSectionAnswerModel[];
  latitude: number | null;
  longitude: number | null;
}
