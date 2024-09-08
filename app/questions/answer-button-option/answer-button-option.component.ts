import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-answer-button-option',
  templateUrl: './answer-button-option.component.html',
  styleUrls: ['./answer-button-option.component.scss'],
})
export class AnswerButtonOptionComponent  implements OnInit {
  isSelected = false;
  @Input() optionNumber: string ='';
  @Input() optionText: string='';
  @Input() isCorrect: boolean = false;
  @Input() disabled: boolean = false;
  @Output() answerSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.isSelected = true ;
    this.answerSelected.emit(this.optionText);
  }

}
