import {Injectable} from "@angular/core";
import {QuestionModel} from "../models/question-model";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public selectedGame: number = 0;
  private questions_game_1: QuestionModel[] =
    [
      {
        questionId: 1,
        questionText: 'Which Of The Below Cube Pack Sizes Is INCORRECT?',
        options: [{
          answerOptionId: 1,
          answerText: '1\'S',
          isCorrect: true
        }, {
          answerOptionId: 2,
          answerText: '12\'S',
          isCorrect: false
        }, {
          answerOptionId: 3,
          answerText: '24\'S',
          isCorrect: false,
        }, {
          answerOptionId: 4,
          answerText: '36\'S',
          isCorrect: false,
        }]
      },
      {
        questionId: 2,
        questionText: 'Which Of The Following Is NOT A Micronutrient?',
        options: [{
          answerOptionId: 1,
          answerText: 'Iron',
          isCorrect: false
        },
          {
            answerOptionId: 2,
            answerText: 'Sugar',
            isCorrect: true
          },
          {
            answerOptionId: 3,
            answerText: 'Zinc',
            isCorrect: false
          },
          {
            answerOptionId: 4,
            answerText: 'Vitamin C',
            isCorrect: false
          }
        ]
      },
      {
        questionId: 3,
        questionText: 'Is Iron Required For The Production Of Red Blood Cells?',
        options: [{
          answerOptionId: 1,
          answerText: 'True',
          isCorrect: true
        }, {
          answerOptionId: 2,
          answerText: 'False',
          isCorrect: false
        }]
      },
      {
        questionId: 4,
        questionText: 'Zinc Is NOT Important For Growth And Brain Function. True Or False?',
        options: [{
          answerOptionId: 1,
          answerText: 'True',
          isCorrect: false
        },
          {
            answerOptionId: 2,
            answerText: 'False',
            isCorrect: true
          }
        ]
      },
      {
        questionId: 5,
        questionText: 'Which Food Is NOT High In Iron?',
        options: [
          {
            answerOptionId: 1,
            answerText: 'Liver',
            isCorrect: false,
          },
          {
            answerOptionId: 2,
            answerText: 'Spinach (Imfino)',
            isCorrect: false,
          },
          {
            answerOptionId: 3,
            answerText: 'Banana',
            isCorrect: true,
          },
          {
            answerOptionId: 4,
            answerText: 'Kidney',
            isCorrect: false,
          }
        ]
      },
      {
        questionId: 6,
        questionText: 'Does Iron Support Good Immunity?',
        options: [
          {
            answerOptionId: 1,
            answerText: 'Yes',
            isCorrect: true
          },
          {
            answerOptionId: 2,
            answerText: 'No',
            isCorrect: false
          }
        ]
      },
      {
        questionId: 7,
        questionText: 'Which Food Is High In Zinc?',
        options: [
          {
            answerOptionId: 1,
            answerText: 'Banana',
            isCorrect: false
          },
          {
            answerOptionId: 2,
            answerText: 'Sweets',
            isCorrect: false
          },
          {
            answerOptionId: 3,
            answerText: 'Fish',
            isCorrect: true
          },
          {
            answerOptionId: 4,
            answerText: 'Cake',
            isCorrect: false
          }
        ]
      },
      {
        questionId: 8,
        questionText: 'Which Of These Is NOT A Sign Or Symptom Of Low Blood Pressure?',
        options: [
          {
            answerOptionId: 1,
            answerText: 'Lack Of Concentration',
            isCorrect: false
          },
          {
            answerOptionId: 2,
            answerText: 'Cough',
            isCorrect: true
          },
          {
            answerOptionId: 3,
            answerText: 'Tiredness',
            isCorrect: false
          },
          {
            answerOptionId: 4,
            answerText: 'Weakness',
            isCorrect: false
          }
        ]
      },
      {
        questionId: 9,
        questionText: 'It Is Important To Use Salt Sparingly In Order To …. ?',
        options: [
          {
            answerOptionId: 1,
            answerText: 'Have Healthy Hair And Nails',
            isCorrect: false
          },
          {
            answerOptionId: 2,
            answerText: 'Control Blood Pressure',
            isCorrect: true
          },
          {
            answerOptionId: 3,
            answerText: 'Have Healthy Lungs',
            isCorrect: false
          },
          {
            answerOptionId: 4,
            answerText: 'Have a Healthy Brain',
            isCorrect: false
          }
        ]
      },
      {
        questionId: 10,
        questionText: 'Which Option Is Incorrect. Low Zinc May Lead To ….?',
        options: [
          {
            answerOptionId: 1,
            answerText: 'Dental Problems',
            isCorrect: false
          },
          {
            answerOptionId: 2,
            answerText: 'Early Blindness',
            isCorrect: false
          },
          {
            answerOptionId: 3,
            answerText: 'Early Aging',
            isCorrect: false
          },
          {
            answerOptionId: 4,
            answerText: 'Poor Growth',
            isCorrect: true
          }
        ]
      }
    ];

  private questions_game_2: QuestionModel[] = [
    {
      questionId: 11,
      questionText: 'Eating Foods Rich In Vitamin C Improves Iron Absorption. True Or False?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'False',
          isCorrect: false
        },
        {
          answerOptionId: 2,
          answerText: 'True',
          isCorrect: true
        }
      ]
    },
    {
      questionId: 12,
      questionText: 'Which Of These Describes What A Micronutrient Is?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Vitamins & Minerals',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Protein',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Fat',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Carbohydrate',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 13,
      questionText: 'Which Of The Below Is Not A Great Source Of Vitamin C?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Tomato',
          isCorrect: false
        },
        {
          answerOptionId: 2,
          answerText: 'Coffee',
          isCorrect: true
        },
        {
          answerOptionId: 3,
          answerText: 'Orange',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Broccoli',
          isCorrect: false
        },
      ]
    },
    {
      questionId: 14,
      questionText: 'What Does Fortify Mean?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Adding One Or More Micronutrient To Improve Nutritional Quality',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Enriching Quality Of A Food',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Making The Food Taste Richer',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Adding More Flavour',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 15,
      questionText: 'Knorrox Stock Cubes Contain Which Micronutrient?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Zinc',
          isCorrect: false
        },
        {
          answerOptionId: 2,
          answerText: 'Vitamin C',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Iron',
          isCorrect: true
        },
        {
          answerOptionId: 4,
          answerText: 'Potassium',
          isCorrect: false
        },
      ]
    },
    {
      questionId: 16,
      questionText: 'New Knorrox Soya Mince Is A Good Source Of?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Zinc',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Vitamin C',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Vitamin A',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Vitamin K',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 17,
      questionText: 'Eating Fried Chips And Deep Fried Fish Then Adding A Sprinkle Of Knorrox Stock Powder Will Help Fight Anaemia. True Or False?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'False',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'True',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 18,
      questionText: 'Our Stock Cubes Have Less Salt. True Or False?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'True',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'False',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 19,
      questionText: 'Dried Fruits, Nuts, Molasses, Wholegrain Breads, Beans, Lentils, Green Leafy Vegetables (Spinach And Imfino), Cereals And Iron-Fortified Cereals Are All A Source Of Which Mineral?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Copper',
          isCorrect: false
        },
        {
          answerOptionId: 2,
          answerText: 'Phosphorus',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Sulphur',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Iron',
          isCorrect: true
        },
      ]
    },
    {
      questionId: 20,
      questionText: 'Which Of The Following Negatively Impacts Absorption Of Iron?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Coffee',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Sweets',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Rice',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Water',
          isCorrect: false
        },
      ]
    },
  ];

  private questions_game_3: QuestionModel[] = [
    {
      questionId: 21,
      questionText: 'Adding Salt In All Your Meals Will Help Strengthen Your Immunity!',
      options: [
        {
          answerOptionId: 1,
          answerText: 'False',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'True',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 22,
      questionText: 'Which Gender Is Mostly Affected By Anaemia?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Females',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Males',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 23,
      questionText: 'Which Of The Below Is The Correct Spelling Of The Product?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Knorrox',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Kinorrox',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Norrox',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Knorox',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 24,
      questionText: 'Complete The Phrase. Fak\' Iflavour Thola ….. ',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Umsoco',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Umoya',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Zonke',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Abantu',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 25,
      questionText: 'How Much Faster Does Stock Powder Dissolve Than Stock Cubes?',
      options: [
        {
          answerOptionId: 1,
          answerText: '7 Times Faster',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: '70 Times Faster',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: '77 Times Faster',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: '17 Times Faster',
          isCorrect: true
        }
      ]
    },
    {
      questionId: 26,
      questionText: 'Iron And Zinc Are Important Nutrients That Are Required By Our Bodies In Small Amounts Every Day. True Or False?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'True',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'False',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 27,
      questionText: 'Which Of The Below Cube Pack Sizes Is INCORRECT?',
      options: [{
        answerOptionId: 1,
        answerText: '1\'S',
        isCorrect: true
      }, {
        answerOptionId: 2,
        answerText: '12\'S',
        isCorrect: false
      }, {
        answerOptionId: 3,
        answerText: '24\'S',
        isCorrect: false,
      }, {
        answerOptionId: 4,
        answerText: '36\'S',
        isCorrect: false,
      }]
    },
    {
      questionId: 28,
      questionText: 'Which Of The Following Is NOT A Micronutrient?',
      options: [{
        answerOptionId: 1,
        answerText: 'Iron',
        isCorrect: false
      },
        {
          answerOptionId: 2,
          answerText: 'Sugar',
          isCorrect: true
        },
        {
          answerOptionId: 3,
          answerText: 'Zinc',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Vitamin C',
          isCorrect: false
        }
      ]
    },
    {
      questionId: 29,
      questionText: 'Is Iron Required For The Production Of Red Blood Cells?',
      options: [{
        answerOptionId: 1,
        answerText: 'True',
        isCorrect: true
      }, {
        answerOptionId: 2,
        answerText: 'False',
        isCorrect: false
      }]
    },{
      questionId: 30,
      questionText: 'New Knorrox Soya Mince Is A Good Source Of?',
      options: [
        {
          answerOptionId: 1,
          answerText: 'Zinc',
          isCorrect: true
        },
        {
          answerOptionId: 2,
          answerText: 'Vitamin C',
          isCorrect: false
        },
        {
          answerOptionId: 3,
          answerText: 'Vitamin A',
          isCorrect: false
        },
        {
          answerOptionId: 4,
          answerText: 'Vitamin K',
          isCorrect: false
        }
      ]
    }
  ]

  constructor() {
  }

  getQuestions() {
    let question = this.questions_game_1;
    switch (this.selectedGame) {
      case 1:
        return of(this.questions_game_1);
      case 2:
        return of(this.questions_game_2);
      case 3:
        return of(this.questions_game_3);

      default:
        return of(this.questions_game_1);
    }

  }
}
