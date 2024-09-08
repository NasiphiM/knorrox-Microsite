import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuestionService} from "../shared/services/question.service";

@Component({
  selector: 'app-start-new',
  templateUrl: './start-new.page.html',
  styleUrls: ['./start-new.page.scss'],
})
export class StartNewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
