import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsPageRoutingModule } from './questions-routing.module';

import { QuestionsPage } from './questions.page';
import {AnswerButtonOptionComponent} from "./answer-button-option/answer-button-option.component";
import {QuestionComponent} from "./question/question.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule
  ],
  declarations: [QuestionsPage, AnswerButtonOptionComponent,QuestionComponent ]
})
export class QuestionsPageModule {}
