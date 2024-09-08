import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuestionService} from "../shared/services/question.service";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.page.html',
  styleUrls: ['./start-game.page.scss'],
})
export class StartGamePage implements OnInit {
  constructor(private router:Router, private qService: QuestionService) { }

  ngOnInit() {
  }

  selectPrize(num : number)
  {
    this.qService.selectedGame = num;
    this.router.navigate(['/questions']);
  }



}
