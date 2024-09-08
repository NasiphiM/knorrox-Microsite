export interface QuestionModel{
  questionId: number;
  questionText: string;
  options: AnswerOption[];
}

export interface AnswerOption{
  answerOptionId: number;
  answerText: string;
  isCorrect: boolean;
}
