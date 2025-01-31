export default {
  'numbers-and-operations': {
    'vertical-addition-and-subtraction': [
      {
        es: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>El aumento de la temperatura media de la Tierra debido a los gases de efecto invernadero ha sido constante en los últimos años. En un país, la temperatura media en los años sesenta era de 15 °C. Diez años después aumentó un 2 %. Calcula esta segunda temperatura y devuelve el resultado con dos decimales.</p>',
            template:
              '<p>La temperatura tras el aumento era de {{response}} °C.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '15.3',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Para obtener el resultado, primero hay que calcular el aumento.</p><p style="text-align:center;">2 % de 15 = 15 · <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{2}{{{100}}}\\)" draggable="true">\\(\\frac{2}{{{100}}}\\)</span> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{15\\ ·\\ 2}{100}\\)" draggable="true">\\(\\frac{15\\ ·\\ 2}{100}\\)</span> = 0.3</p><p>Después hay que sumarlo a 15.</p><p style="text-align:center;">15 + 0.3 = 15.3</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'INTERMEDIATE',
                isFloating: true,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<p>Primero, calcula el porcentaje. Después, súmaselo a la cantidad inicial.</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: '375231bb-0c4c-4aad-b9d2-d36073e42990',
        },
        en: {},
        pt: {},
      },
    ],
    'addition-subtraction': [
      {
        es: {
          title: '',
          type: 'counting',
          metadata: {
            name: 'Counting',
          },
          data: {
            options: [
              {
                value: 6,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_18a_4.svg',
              },
              {
                value: 5,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_35a_2.svg',
              },
            ],
            showResult: false,
            operation: 'add',
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
            stimulus: '<p>Haz clic en las frutas para sumar 7.</p>',
            type: 'counting',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 7,
              },
              penalty: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: ['<p>Cuenta las fresas y plátanos.</p>'],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Hay que sumar las fresas y plátanos hasta obtener 7.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
          },
          reference: '236a8d93-5601-4d0c-a2b9-d6a4042942f8',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'counting',
          metadata: {
            name: 'Counting',
          },
          data: {
            options: [
              {
                value: 5,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_18a_4.svg',
              },
              {
                value: 2,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_35a_2.svg',
              },
            ],
            showResult: false,
            operation: 'add',
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
            stimulus: '<p>Click on the fruits to add 3.</p>',
            type: 'counting',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 3,
              },
              penalty: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: ['<p>Count the strawberries and bananas.</p>'],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>You need to add the strawberries and bananas until you get 3.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
          },
          reference: 'eaedc22b-b4ef-4af2-ab1d-1676ba99e344',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'counting',
          metadata: {
            name: 'Counting',
          },
          data: {
            options: [
              {
                value: 6,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_18a_4.svg',
              },
              {
                value: 3,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_35a_2.svg',
              },
            ],
            showResult: false,
            operation: 'add',
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
            stimulus: '<p>Clique nas frutas para obter a soma 3.</p>',
            type: 'counting',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 3,
              },
              penalty: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: ['<p>Conte os morangos e bananas.</p>'],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>É necessário adicionar os morangos e bananas até obter 3.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
          },
          reference: '2a3137c1-022d-40e6-8ac9-4e2b0f11b381',
          lemonadeVersion: '3.33.2',
        },
      },
      {
        es: {
          title: '',
          type: 'counting',
          metadata: {
            name: 'Counting',
          },
          data: {
            options: [
              {
                value: 9,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_18a_2.svg',
              },
            ],
            showResult: false,
            operation: 'subtract',
            feedback_responses: [
              {
                feedback: '',
              },
            ],
            stimulus:
              '<p>Tacha los calcetines necesarios para que el resultado de la resta sea 5.</p>',
            type: 'counting',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 5,
              },
              penalty: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>Quita los calcetienes de 1 en 1 hasta quedarte con 5.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Hay que quitar los calcetienes de 1 en 1 hasta quedarte con 5.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
          },
          reference: '2ded786b-b6e8-445d-885b-424f41952e0c',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'counting',
          metadata: {
            name: 'Counting',
          },
          data: {
            options: [
              {
                value: 8,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_18a_2.svg',
              },
            ],
            showResult: false,
            operation: 'subtract',
            feedback_responses: [
              {
                feedback: '',
              },
            ],
            stimulus:
              '<p>Cross out the necessary socks so that the result of the subtraction is 7.</p>',
            type: 'counting',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 7,
              },
              penalty: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>Remove the socks one by one until you are left with 7.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>You have to remove the socks one by one until you are left with 7.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
          },
          reference: 'd409117f-a808-4076-9aae-035f4ced825a',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'counting',
          metadata: {
            name: 'Counting',
          },
          data: {
            options: [
              {
                value: 5,
                src: 'https://blueberry-assets.oneclick.es/M1_NyO_18a_2.svg',
              },
            ],
            showResult: false,
            operation: 'subtract',
            feedback_responses: [
              {
                feedback: '',
              },
            ],
            stimulus:
              '<p>Clique para eliminar as meias necessárias para que o resultado da subtração seja 3.</p>',
            type: 'counting',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 3,
              },
              penalty: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: ['<p>Retire as meias de 1 em 1 até ficar com 3.</p>'],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>É necessário retirar as meias de 1 em 1 até ficar com 3.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
          },
          reference: 'ce54c1a0-0213-41a6-909c-670dd73e1205',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'introduction-multiplication': [
      {
        es: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label: '4 × 6',
                value: 0,
                feedback: '',
              },
              {
                label: '4 × 7',
                value: 1,
                feedback: '',
              },
              {
                label: '4 × 2',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Selecciona la multiplicación con el mismo resultado que esta suma:</p><p style="text-align: center">4 + 4 + 4 + 4 + 4 + 4</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Una multiplicación equivale a la suma de sumandos iguales.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: [
              '<p>Una multiplicación equivale a la suma de sumandos iguales.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '1dc92163-8a10-46bb-8b3e-9627d9428481',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label: '5 × 3',
                value: 0,
                feedback: '',
              },
              {
                label: '5 × 9',
                value: 1,
                feedback: '',
              },
              {
                label: '5 × 7',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Select the multiplication with the same result as this addition:</p><p style="text-align: center">5 + 5 + 5</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>A multiplication is equivalent to the addition of equal addends.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: [
              '<p>A multiplication is equivalent to the addition of equal addends.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '7cf2a13e-9635-4022-b09a-df52020f1693',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label: '8 × 6',
                value: 0,
                feedback: '',
              },
              {
                label: '8 × 10',
                value: 1,
                feedback: '',
              },
              {
                label: '8 × 9',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Selecione a multiplicação que tem o mesmo resultado desta adição:</p><p style="text-align: center">8 + 8 + 8 + 8 + 8 + 8</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Uma multiplicação equivale a uma adição de parcelas iguais.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: [
              '<p>Uma multiplicação equivale a uma adição de parcelas iguais.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '8f1f17ea-5bba-44af-ac44-b13208024e82',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'place-numbers-on-number-line': [
      {
        es: {
          title: '',
          type: 'numberline',
          metadata: {
            name: 'Number line',
          },
          data: {
            type: 'numberline',
            stimulus: '<p>Sitúa estos números en la recta numérica.</p>',
            points: [-3, 11, -5],
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    position: -3,
                  },
                  {
                    position: 11,
                  },
                  {
                    position: -5,
                  },
                ],
              },
              penalty: 0,
            },
            line: {
              max: 19,
              min: -11,
              divisions: 31,
            },
            ticks: {
              distance: 1,
              show: true,
            },
            labels: {
              frequency: 5,
              show_max: true,
              show_min: true,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Los números negativos se ubican a la izquierda del 0.</p><p>Los números positivos, a su derecha.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Los números negativos se ubican a la izquierda del 0.</p><p>Los números positivos, a su derecha.</p>',
            ],
            isEvaluable: true,
          },
          reference: '6a11b9c7-ebd0-43e5-8bed-209c9d20ca47',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'numberline',
          metadata: {
            name: 'Number line',
          },
          data: {
            type: 'numberline',
            stimulus: '<p>Place these numbers on the number line.</p>',
            points: [1, 2, -1],
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    position: 1,
                  },
                  {
                    position: 2,
                  },
                  {
                    position: -1,
                  },
                ],
              },
              penalty: 0,
            },
            line: {
              max: 19,
              min: -11,
              divisions: 31,
            },
            ticks: {
              distance: 1,
              show: true,
            },
            labels: {
              frequency: 5,
              show_max: true,
              show_min: true,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Negative numbers are located to the left of 0.</p><p>Positive numbers, to its right.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Negative numbers are located to the left of 0.</p><p>Positive numbers, to its right.</p>',
            ],
            isEvaluable: true,
          },
          reference: '3f4a2783-9aba-4c09-a67b-752a716ca0cc',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'numberline',
          metadata: {
            name: 'Number line',
          },
          data: {
            type: 'numberline',
            stimulus: '<p>Posicione estes números na reta numérica.</p>',
            points: [-5, -4, 3],
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    position: -5,
                  },
                  {
                    position: -4,
                  },
                  {
                    position: 3,
                  },
                ],
              },
              penalty: 0,
            },
            line: {
              max: 19,
              min: -11,
              divisions: 31,
            },
            ticks: {
              distance: 1,
              show: true,
            },
            labels: {
              frequency: 5,
              show_max: true,
              show_min: true,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Os números negativos são colocados à esquerda do 0.</p><p>Os números positivos, à sua direita.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Os números negativos são colocados à esquerda do 0.</p><p>Os números positivos, à sua direita.</p>',
            ],
            isEvaluable: true,
          },
          reference: '0f72b534-03a1-47aa-8093-166b0c402850',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'associate-fractions-graphic-representation': [
      {
        es: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_1.svg" width="300"></img></div>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_4.svg" width="300"></img></div>',
                value: 1,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_8.svg" width="300"></img></div>',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Selecciona la figura que representa la fracción <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{2}{5}\\)" draggable="true">\\(\\frac{2}{5}\\)</span>.</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>El denominador representa el número de partes en las que se divide la figura y el numerador, la parte pintada.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: [
              '<p>El denominador representa el número de partes en las que se divide la figura y el numerador, la parte pintada.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: 'df3c2799-bc0b-467f-844b-057d747a9d4d',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_1.svg" width="300"></img></div>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_7.svg" width="300"></img></div>',
                value: 1,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_8.svg" width="300"></img></div>',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Select the figure that represents the fraction <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{2}{5}\\)" draggable="true">\\(\\frac{2}{5}\\)</span>.</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The denominator represents the number of parts into which the figure is divided and the numerator, the colored part.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: [
              '<p>The denominator represents the number of parts into which the figure is divided and the numerator, the colored part.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '45051e2f-18df-4938-b6e8-0df495b0c5e8',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_2.svg" width="300"></img></div>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_7.svg" width="300"></img></div>',
                value: 1,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M5_NyO_19c_8.svg" width="300"></img></div>',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Selecione a figura que representa a fração <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{2}{5}\\)" draggable="true">\\(\\frac{2}{5}\\)</span>.</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>O denominador representa o número de partes em que a figura é dividida e o numerador, a parte pintada.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: [
              '<p>O denominador representa o número de partes em que a figura é dividida e o numerador, a parte pintada.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '86dc00a9-7a89-4ccb-8a79-e3f31b2f97c3',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'graphically-representing-fractions': [
      {
        es: {
          title: '',
          type: 'fraction',
          metadata: {
            name: 'Fraction',
          },
          data: {
            type: 'fraction',
            stimulus:
              '<p>Haz clic y colorea <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{6}{7}\\)" draggable="true">\\(\\frac{6}{7}\\)</span> de la siguiente figura.</p>',
            shape: {
              type: 'RANDOM',
              divisions: 7,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 6,
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              theme: 'theme-violet',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>El denominador representa el número de partes en las que se divide la figura.</p><p>El numerador representa la parte pintada.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>El denominador representa el número de partes en las que se divide la figura.</p><p>El numerador representa la parte pintada.</p>',
            ],
            isEvaluable: true,
          },
          reference: 'beabfea1-4dbf-47ec-9b61-84597740587c',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'fraction',
          metadata: {
            name: 'Fraction',
          },
          data: {
            type: 'fraction',
            stimulus:
              '<p>Click and color <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{6}{8}\\)" draggable="true">\\(\\frac{6}{8}\\)</span> of the following shape.</p>',
            shape: {
              type: 'RANDOM',
              divisions: 8,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 6,
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              theme: 'theme-dark-orange',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The denominator represents the number of parts into which the figure is divided.</p><p>The numerator represents the colored part.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>The denominator represents the number of parts into which the figure is divided.</p><p>The numerator represents the colored part.</p>',
            ],
            isEvaluable: true,
          },
          reference: '96e207d7-ffb4-4751-a8d8-3632e601b6e6',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'fraction',
          metadata: {
            name: 'Fraction',
          },
          data: {
            type: 'fraction',
            stimulus:
              '<p>Clique e colore <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{6}{7}\\)" draggable="true">\\(\\frac{6}{7}\\)</span> da figura a seguir.</p>',
            shape: {
              type: 'RANDOM',
              divisions: 7,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: 6,
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              theme: 'theme-green',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>O denominador representa o número de partes em que a figura é dividida.</p><p>O numerador representa a parte pintada.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>O denominador representa o número de partes em que a figura é dividida.</p><p>O numerador representa a parte pintada.</p>',
            ],
            isEvaluable: true,
          },
          reference: '329e886e-f34d-4f60-80c5-cd8818c1a40f',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'prime-factorization': [
      {
        es: {
          title: '',
          type: 'primeNumberDecomposition',
          metadata: {
            name: 'Prime number decomposition',
          },
          data: {
            type: 'primeNumberDecomposition',
            stimulus:
              '<p>Descompón el siguiente número en factores primos.</p>',
            initialNumber: 98,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: '',
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Los factores primos de un número son aquellos cuyo producto da como resultado ese mismo número.</p><p>A la derecha de la línea solo se pueden poner números primos para dividir al de la izquierda. Los correctos serán los que den un resto igual a 0.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Los factores primos de un número son aquellos cuyo producto da como resultado ese mismo número.</p><p>A la derecha de la línea solo se pueden poner números primos para dividir al de la izquierda. Los correctos serán los que den un resto igual a 0.</p>',
            ],
          },
          extraValues: {},
          reference: 'bb825484-a353-46ae-afe4-e5e424f925aa',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'primeNumberDecomposition',
          metadata: {
            name: 'Prime number decomposition',
          },
          data: {
            type: 'primeNumberDecomposition',
            stimulus:
              '<p>Decompose the following number into prime factors.</p>',
            initialNumber: 605,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: '',
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The prime factors of a number are those whose product results in that same number.</p><p>On the right side of the line, only prime numbers can be placed to divide the one on the left. The correct ones will be those that give a remainder equal to 0.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>The prime factors of a number are those whose product results in that same number.</p><p>To the right of the line, only prime numbers can be placed to divide the one on the left. The correct ones will be those that give a remainder of 0.</p>',
            ],
          },
          extraValues: {},
          reference: '7c6c3aae-f2fd-4ed8-a7d7-3a2719aa3249',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'primeNumberDecomposition',
          metadata: {
            name: 'Prime number decomposition',
          },
          data: {
            type: 'primeNumberDecomposition',
            stimulus: '<p>Decomponha o seguinte número em fatores primos.</p>',
            initialNumber: 70,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: '',
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Os fatores primos de um número são aqueles cujo produto resulta nesse mesmo número.</p><p>À direita da linha, só se podem colocar números primos para dividir o da esquerda. Os corretos serão aqueles que dão um resto igual a 0.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Os fatores primos de um número são aqueles cujo produto resulta nesse mesmo número.</p><p>À direita da linha, só se podem colocar números primos para dividir o da esquerda. Os corretos serão aqueles que dão um resto igual a 0.</p>',
            ],
          },
          extraValues: {},
          reference: 'bd37ba52-84b6-49a5-9482-14177f9bee00',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'equivalence-between-powers-roots': [
      {
        es: {
          title: '',
          widget_type: 'response',
          metadata: {
            name: 'Match list',
          },
          type: 'association',
          data: {
            possible_responses: [
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[10]{8^{4}}\\)" draggable="true">\\(\\sqrt[10]{8^{4}}\\)</span>',
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[5]{8^{9}}\\)" draggable="true">\\(\\sqrt[5]{8^{9}}\\)</span>',
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{{{1}}}{\\sqrt[10]}}]{8^{4}}}}\\)" draggable="true">\\(\\frac{{{1}}}{\\sqrt[10]{8^{4}}}\\)</span>',
            ],
            stimulus:
              '<p>Empareja cada potencia con su raiz correspondiente.</p>',
            stimulus_list: [
              '8<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{4}{10}}\\)" draggable="true">\\(\\frac{4}{10}\\)</span></sup>',
              '8<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{9}{5}}\\)" draggable="true">\\(\\frac{9}{5}\\)</span></sup>',
              '8<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{−4}{10}}\\)" draggable="true">\\(\\frac{−4}{10}\\)</span></sup>',
            ],
            type: 'association',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[10]{8^{4}}\\)" draggable="true">\\(\\sqrt[10]{8^{4}}\\)</span>',
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[5]{8^{9}}\\)" draggable="true">\\(\\sqrt[5]{8^{9}}\\)</span>',
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{{{1}}}{\\sqrt[10]}}]{8^{4}}}}\\)" draggable="true">\\(\\frac{{{1}}}{\\sqrt[10]{8^{4}}}\\)</span>',
                ],
              },
            },
            shuffle_options: true,
            duplicate_responses: false,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Las raices y potencias cumplen esta relación:</p><p style="text-align: center"> <i>a</i><sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{m}{n}\\)" draggable="true">\\(\\frac{m}{n}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[n]{a^{m}}\\)" draggable="true">\\(\\sqrt[n]{a^{m}}\\)</span></p><p>Por tanto:</p><p style=\'text-align: center\'>8<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{9}{5}}\\)" draggable="true">\\(\\frac{9}{5}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[5]{8^{9}}\\)" draggable="true">\\(\\sqrt[5]{8^{9}}\\)</span></p><p style=\'text-align: center\'>8<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{4}{10}}\\)" draggable="true">\\(\\frac{4}{10}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[10]{8^{4}}\\)" draggable="true">\\(\\sqrt[10]{8^{4}}\\)</span></p><p style=\'text-align: center\'>8<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{−4}{10}}\\)" draggable="true">\\(\\frac{−4}{10}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{{{1}}}{\\sqrt[10]}}]{8^{4}}}}\\)" draggable="true">\\(\\frac{{{1}}}{\\sqrt[10]{8^{4}}}\\)</span></p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            hints: [
              '<p>Las raices y potencias cumplen esta relación:</p><p style="text-align: center"> <i>a</i><sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{m}{n}\\)" draggable="true">\\(\\frac{m}{n}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[n]{a^{m}}\\)" draggable="true">\\(\\sqrt[n]{a^{m}}\\)</span></p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'c34fe247-e092-4217-8561-01042a4df84e',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          widget_type: 'response',
          metadata: {
            name: 'Match list',
          },
          type: 'association',
          data: {
            possible_responses: [
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[10]{6^{4}}\\)" draggable="true">\\(\\sqrt[10]{6^{4}}\\)</span>',
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[2]{6^{8}}\\)" draggable="true">\\(\\sqrt[2]{6^{8}}\\)</span>',
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{{{1}}}{\\sqrt[10]}}]{6^{4}}}}\\)" draggable="true">\\(\\frac{{{1}}}{\\sqrt[10]{6^{4}}}\\)</span>',
            ],
            stimulus: '<p>Match each power with its corresponding root.</p>',
            stimulus_list: [
              '6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{4}{10}}\\)" draggable="true">\\(\\frac{4}{10}\\)</span></sup>',
              '6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{8}{2}}\\)" draggable="true">\\(\\frac{8}{2}\\)</span></sup>',
              '6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{−4}{10}}\\)" draggable="true">\\(\\frac{−4}{10}\\)</span></sup>',
            ],
            type: 'association',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[10]{6^{4}}\\)" draggable="true">\\(\\sqrt[10]{6^{4}}\\)</span>',
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[2]{6^{8}}\\)" draggable="true">\\(\\sqrt[2]{6^{8}}\\)</span>',
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{{{1}}}{\\sqrt[10]}}]{6^{4}}}}\\)" draggable="true">\\(\\frac{{{1}}}{\\sqrt[10]{6^{4}}}\\)</span>',
                ],
              },
            },
            shuffle_options: true,
            duplicate_responses: false,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The roots y powers fulfill this relationship:</p><p style="text-align: center"> <i>a</i><sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{m}{n}\\)" draggable="true">\\(\\frac{m}{n}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[n]{a^{m}}\\)" draggable="true">\\(\\sqrt[n]{a^{m}}\\)</span></p><p>Therefore:</p><p style=\'text-align: center\'>6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{8}{2}}\\)" draggable="true">\\(\\frac{8}{2}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[2]{6^{8}}\\)" draggable="true">\\(\\sqrt[2]{6^{8}}\\)</span></p><p style=\'text-align: center\'>6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{4}{10}}\\)" draggable="true">\\(\\frac{4}{10}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[10]{6^{4}}\\)" draggable="true">\\(\\sqrt[10]{6^{4}}\\)</span></p><p style=\'text-align: center\'>6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{−4}{10}}\\)" draggable="true">\\(\\frac{−4}{10}\\)</span></sup> = <span class="fr',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            hints: [
              '<p>The roots y powers satisfy this relationship:</p><p style="text-align: center"> <i>a</i><sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{m}{n}\\)" draggable="true">\\(\\frac{m}{n}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[n]{a^{m}}\\)" draggable="true">\\(\\sqrt[n]{a^{m}}\\)</span></p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'c373d242-5672-4f06-85b6-f2a90bf70a8e',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          widget_type: 'response',
          metadata: {
            name: 'Match list',
          },
          type: 'association',
          data: {
            possible_responses: [
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[7]{6^{3}}\\)" draggable="true">\\(\\sqrt[7]{6^{3}}\\)</span>',
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[4]{6^{10}}\\)" draggable="true">\\(\\sqrt[4]{6^{10}}\\)</span>',
              '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{{{1}}}{\\sqrt[7]}}]{6^{3}}}}\\)" draggable="true">\\(\\frac{{{1}}}{\\sqrt[7]{6^{3}}}\\)</span>',
            ],
            stimulus:
              '<p>Combine cada potência com sua raiz correspondente.</p>',
            stimulus_list: [
              '6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{3}{7}}\\)" draggable="true">\\(\\frac{3}{7}\\)</span></sup>',
              '6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{10}{4}}\\)" draggable="true">\\(\\frac{10}{4}\\)</span></sup>',
              '6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{−3}{7}}\\)" draggable="true">\\(\\frac{−3}{7}\\)</span></sup>',
            ],
            type: 'association',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[7]{6^{3}}\\)" draggable="true">\\(\\sqrt[7]{6^{3}}\\)</span>',
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[4]{6^{10}}\\)" draggable="true">\\(\\sqrt[4]{6^{10}}\\)</span>',
                  '<span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{{{1}}}{\\sqrt[7]}}]{6^{3}}}}\\)" draggable="true">\\(\\frac{{{1}}}{\\sqrt[7]{6^{3}}}\\)</span>',
                ],
              },
            },
            shuffle_options: true,
            duplicate_responses: false,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>As raízes y potências cumprem esta relação:</p><p style="text-align: center"> <i>a</i><sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{m}{n}\\)" draggable="true">\\(\\frac{m}{n}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[n]{a^{m}}\\)" draggable="true">\\(\\sqrt[n]{a^{m}}\\)</span></p><p>Portanto:</p><p style=\'text-align: center\'>6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{10}{4}}\\)" draggable="true">\\(\\frac{10}{4}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[4]{6^{10}}\\)" draggable="true">\\(\\sqrt[4]{6^{10}}\\)</span></p><p style=\'text-align: center\'>6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{3}{7}}\\)" draggable="true">\\(\\frac{3}{7}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[7]{6^{3}}\\)" draggable="true">\\(\\sqrt[7]{6^{3}}\\)</span></p><p style=\'text-align: center\'>6<sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{−3}{7}}\\)" draggable="true">\\(\\frac{−3}{7}\\)</span>__PLACEHOLDER_17',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            hints: [
              '<p>As raízes y potências cumprem esta relação:</p><p style="text-align: center"> <i>a</i><sup><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{m}{n}\\)" draggable="true">\\(\\frac{m}{n}\\)</span></sup> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\sqrt[n]{a^{m}}\\)" draggable="true">\\(\\sqrt[n]{a^{m}}\\)</span></p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '93748233-5a9e-4dc9-980e-26f18efc3bd8',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
  },
  geometry: {
    'measuring-angles-protractor': [
      {
        es: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Escribe la amplitud de este ángulo. Pulsa el botón para medirlo con un transportador.</p><div class="fr-angle theme-green" data-angle=\'{"angle": 80, "sense": "POSITIVE", "withProtractor": true}\'></div>',
            template: '<p>La amplitud del ángulo mide {{response}}°.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '80',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Un ángulo se mide situando el vértice en el centro del transportador.</p><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M6_G_4a_2.png\' width="300"></div>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<p>Coloca el vértice del ángulo en el centro del transportador.</p><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M6_G_4a_1.png\' width="300"></div>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: 'edfe6046-33b6-4d51-a9d0-7c93f817f965',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Write the amplitude of this angle. Press the button to measure it with a protractor.</p><div class="fr-angle theme-light-blue" data-angle=\'{"angle": 110, "sense": "POSITIVE", "withProtractor": true}\'></div>',
            template: '<p>The angle amplitude measures {{response}}°.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '110',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>An angle is measured by placing the vertex at the center of the protractor.</p><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M6_G_4a_2.png\' width="300"></div>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<p>Place the vertex of the angle at the center of the protractor.</p><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M6_G_4a_1.png\' width="300"></div>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: 'f72df6fa-3a00-4531-a188-0980cb8a08e6',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Escreva a amplitude desse ângulo. Pressione o botão para medi-lo com um transferidor.</p><div class="fr-angle theme-violet" data-angle=\'{"angle": 100, "sense": "POSITIVE", "withProtractor": true}\'></div>',
            template: '<p>A amplitude do ângulo mede {{response}}°.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '100',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Um ângulo é medido colocando-se o vértice no centro do transferidor.</p><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M6_G_4a_2.png\' width="300"></div>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<p>Coloque o vértice do ângulo no centro do transferidor.</p><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M6_G_4a_1.png\' width="300"></div>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: 'd7a25763-1da0-45a1-9a67-c55da0d267d6',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'spatial-orientation': [
      {
        es: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['delante', 'detrás'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Arrastra la palabra correcta.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_14.svg" width="400"></img></div>',
            template: '<p>El columpio está {{response}} de la niña.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['delante'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 300px;max-height: 300px;position: relative;width: 100%;display: inline-block;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_12.svg" alt="" tabindex="0"></img><div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"><div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;"><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 71%; top: 56%;">detrás<br>del ratón</span><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 5%; top: 56%;">delante<br>del ratón</span></div></div></div>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 300px;max-height: 300px;position: relative;width: 100%;display: inline-block;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_12.svg" alt="" tabindex="0"></img><div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"><div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;"><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 71%; top: 56%;">detrás<br>del ratón</span><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 5%; top: 56%;">delante<br>del ratón</span></div></div></div>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'b9d73b96-5c61-4f3f-9eaf-3c7fe978c33a',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['in front of', 'behind'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Drag the correct word.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_14.svg" width="400"></img></div>',
            template: '<p>The swing is {{response}} the girl.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['in front of'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 300px;max-height: 300px;position: relative;width: 100%;display: inline-block;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_12.svg" alt="" tabindex="0"></img><div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"><div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;"><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 68%; top: 56%;">behind<br>the mouse</span><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 3%; top: 56%;">in front of<br>the mouse</span></div></div></div>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 300px;max-height: 300px;position: relative;width: 100%;display: inline-block;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_12.svg" alt="" tabindex="0"></img><div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"><div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;"><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 68%; top: 56%;">behind<br>the mouse</span><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 3%; top: 56%;">in front of<br>the mouse</span></div></div></div>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'd58345ee-0dc4-4bc4-930a-368a13b1b989',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['na frente', 'atrás'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Arraste a palavra correta.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_14.svg" width="400"></img></div>',
            template: '<p>O balanço está {{response}} da menina.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['na frente'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 300px;max-height: 300px;position: relative;width: 100%;display: inline-block;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_12.svg" alt="" tabindex="0"></img><div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"><div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;"><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 72%; top: 56%;">atrás<br>do rato</span><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 5%; top: 56%;">na frente<br>do rato</span></div></div></div>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 300px;max-height: 300px;position: relative;width: 100%;display: inline-block;"><img src="https://blueberry-assets.oneclick.es/M2_G_1d_12.svg" alt="" tabindex="0"></img><div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"><div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;"><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 72%; top: 56%;">atrás<br>do rato</span><span class="lemo-graphie-label" style="text-align: center; position: absolute; left: 5%; top: 56%;">na frente<br>do rato</span></div></div></div>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '9edfa49c-19ec-459f-a622-4cc38dbbad3e',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'spatial-position': [
      {
        es: {
          title: '',
          type: 'pathway',
          metadata: {
            name: 'Pathway',
          },
          data: {
            type: 'pathway',
            stimulus:
              '<p>Hace mucho, Adela enterró un juguete en el jardín. Ayúdala a encontrarlo siguiendo estas instrucciones.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  [1, 4],
                  [1, 3],
                  [0, 3],
                  [0, 4],
                  [0, 5],
                  [1, 5],
                  [2, 5],
                ],
              },
              penalty: 0,
            },
            board: {
              columns: 6,
              rows: 6,
              icon: 'https://lemonade-assets.oneclick.es/pathway/farmer.png',
              background: {
                src: 'https://lemonade-assets.oneclick.es/pathway/bck2.png',
                mode: 'auto',
                width: 90,
                height: 90,
                alt: '',
              },
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                'Mueve el personaje siguiendo las instrucciones.',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['Recorre la cuadrícula siguiendo las instrucciones.'],
            isEvaluable: true,
          },
          reference: 'c83618f0-b36f-4a30-9ed4-c1cfb5dbc4eb',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'pathway',
          metadata: {
            name: 'Pathway',
          },
          data: {
            type: 'pathway',
            stimulus:
              '<p>Long ago, Helen buried a toy in the garden. Help her find it by following these instructions.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  [3, 2],
                  [2, 2],
                  [1, 2],
                  [1, 3],
                  [1, 4],
                  [1, 5],
                  [0, 5],
                  [0, 4],
                  [0, 3],
                  [0, 2],
                  [0, 1],
                  [0, 0],
                  [1, 0],
                  [1, 1],
                ],
              },
              penalty: 0,
            },
            board: {
              columns: 6,
              rows: 6,
              icon: 'https://lemonade-assets.oneclick.es/pathway/farmer.png',
              background: {
                src: 'https://lemonade-assets.oneclick.es/pathway/bck2.png',
                mode: 'auto',
                width: 90,
                height: 90,
                alt: '',
              },
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
            },
            feedback: {
              successMessage: '',
              errorMessages: ['Move the character following the instructions.'],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['Traverse the grid following the instructions.'],
            isEvaluable: true,
          },
          reference: '689d99b2-8b2b-4fbc-a0b2-f827a4be1236',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'pathway',
          metadata: {
            name: 'Pathway',
          },
          data: {
            type: 'pathway',
            stimulus:
              '<p>Há muito tempo, Meire enterrou um brinquedo no jardim. Ajude-a a encontrá-lo seguindo estas instruções.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  [2, 1],
                  [2, 0],
                  [3, 0],
                  [4, 0],
                  [5, 0],
                  [5, 1],
                  [4, 1],
                  [3, 1],
                  [3, 2],
                  [3, 3],
                  [3, 4],
                  [3, 5],
                  [2, 5],
                ],
              },
              penalty: 0,
            },
            board: {
              columns: 6,
              rows: 6,
              icon: 'https://lemonade-assets.oneclick.es/pathway/farmer.png',
              background: {
                src: 'https://lemonade-assets.oneclick.es/pathway/bck2.png',
                mode: 'auto',
                width: 90,
                height: 90,
                alt: '',
              },
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
            },
            feedback: {
              successMessage: '',
              errorMessages: ['Mova o personagem seguindo as instruções.'],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['Percorra a grade seguindo as instruções.'],
            isEvaluable: true,
          },
          reference: 'e863d830-22a8-4464-baae-c43a8205e344',
          lemonadeVersion: '3.33.2',
        },
      },
      {
        es: {
          title: '',
          type: 'reversepathway',
          metadata: {
            name: 'Reverse pathway',
          },
          data: {
            type: 'reversepathway',
            stimulus:
              '<p>Teclea el recorrido que tiene que hacer el obrero para llegar a su destino.</p>',
            board: {
              columns: 6,
              rows: 6,
              icon: 'https://lemonade-assets.oneclick.es/pathway/worker.png',
              background: {
                src: 'https://lemonade-assets.oneclick.es/pathway/bck3.png',
                mode: 'auto',
                width: 600,
                height: 600,
                alt: '',
              },
              pathway: [
                [1, 1],
                [1, 0],
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 2],
                [2, 2],
                [3, 2],
                [3, 1],
                [3, 0],
              ],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    direction: 'TOP',
                    steps: 1,
                  },
                  {
                    direction: 'LEFT',
                    steps: 1,
                  },
                  {
                    direction: 'BOTTOM',
                    steps: 2,
                  },
                  {
                    direction: 'RIGHT',
                    steps: 3,
                  },
                  {
                    direction: 'TOP',
                    steps: 2,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              steps_position: 'BELOW',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Hay que seleccionar los pasos que tiene que dar en cada dirección.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Selecciona cuántos pasos tiene que dar en cada dirección.</p>',
            ],
            isEvaluable: true,
          },
          reference: '0a4055a7-3a86-412a-8b36-f8e6234a2b7c',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'reversepathway',
          metadata: {
            name: 'Reverse pathway',
          },
          data: {
            type: 'reversepathway',
            stimulus:
              '<p>Type the route that the worker has to take to reach his destination.</p>',
            board: {
              columns: 6,
              rows: 6,
              icon: 'https://lemonade-assets.oneclick.es/pathway/worker.png',
              background: {
                src: 'https://lemonade-assets.oneclick.es/pathway/bck3.png',
                mode: 'auto',
                width: 600,
                height: 600,
                alt: '',
              },
              pathway: [
                [5, 5],
                [4, 5],
                [4, 4],
                [4, 3],
                [4, 2],
                [3, 2],
                [2, 2],
                [1, 2],
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5],
                [1, 5],
                [2, 5],
                [3, 5],
              ],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    direction: 'LEFT',
                    steps: 1,
                  },
                  {
                    direction: 'TOP',
                    steps: 3,
                  },
                  {
                    direction: 'LEFT',
                    steps: 4,
                  },
                  {
                    direction: 'BOTTOM',
                    steps: 3,
                  },
                  {
                    direction: 'RIGHT',
                    steps: 3,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              steps_position: 'BELOW',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Select how many steps she has to take in each direction.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Select how many steps she has to take in each direction.</p>',
            ],
            isEvaluable: true,
          },
          reference: '87afeeb4-a05b-4a7e-a98f-0b7a70a4241b',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'reversepathway',
          metadata: {
            name: 'Reverse pathway',
          },
          data: {
            type: 'reversepathway',
            stimulus:
              '<p>Digite a rota que o trabalhador deve seguir para chegar ao seu destino.</p>',
            board: {
              columns: 6,
              rows: 6,
              icon: 'https://lemonade-assets.oneclick.es/pathway/worker.png',
              background: {
                src: 'https://lemonade-assets.oneclick.es/pathway/bck3.png',
                mode: 'auto',
                width: 600,
                height: 600,
                alt: '',
              },
              pathway: [
                [3, 1],
                [3, 0],
                [4, 0],
                [4, 1],
                [4, 2],
                [4, 3],
                [4, 4],
                [4, 5],
                [3, 5],
                [2, 5],
                [1, 5],
                [0, 5],
                [0, 4],
              ],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    direction: 'TOP',
                    steps: 1,
                  },
                  {
                    direction: 'RIGHT',
                    steps: 1,
                  },
                  {
                    direction: 'BOTTOM',
                    steps: 5,
                  },
                  {
                    direction: 'LEFT',
                    steps: 4,
                  },
                  {
                    direction: 'TOP',
                    steps: 1,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              steps_position: 'BELOW',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Você precisa selecionar quantos passos deve dar em cada direção.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Selecione quantas etapas ela terá de percorrer em cada direção.</p>',
            ],
            isEvaluable: true,
          },
          reference: '3e4a91e3-2c61-4cea-b244-0b2410ba5f09',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'identify-types-angles': [
      {
        es: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['Llano', 'Obtuso', 'Agudo', 'Recto'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Arrastra los nombres de los siguientes tipos de ángulos.</p>',
            template:
              '<table style="width: 100%;border:none;"><tbody><tr><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_8.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_6.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_4.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_2.svg\'></div></td></tr><tr><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Llano', 'Obtuso', 'Agudo', 'Recto'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Los ángulos se clasifican en:</p><ul><li><b>Agudos</b>: miden menos de 90°.</li><li><b>Rectos</b>: miden 90°.</li><li><b>Obtusos</b>: miden más de 90°.</li><li><b>Llanos</b>: miden 180°.</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>De menor a mayor amplitud, los ángulos se clasifican en: agudos, rectos, obtusos y llanos.</p>',
            ],
            feedback_responses: [
              {
                feedback: '<p>Es un ángulo llano porque mide 180°.</p>',
              },
              {
                feedback: '<p>Es un ángulo obtuso porque mide más de 90°.</p>',
              },
              {
                feedback: '<p>Es un ángulo agudo porque mide menos de 90°.</p>',
              },
              {
                feedback: '<p>Es un ángulo recto porque mide 90°.</p>',
              },
            ],
          },
          reference: '775524cf-c291-4dfa-be45-9de2001c90ea',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['Flat', 'Obtuse', 'Acute', 'Right'],
            response_container: {
              pointer: 'left',
            },
            stimulus: '<p>Drag the names of the following types of angles.</p>',
            template:
              '<table style="width: 100%;border:none;"><tbody><tr><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_8.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_6.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_4.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_2.svg\'></div></td></tr><tr><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Flat', 'Obtuse', 'Acute', 'Right'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The angles are classified into:</p><ul><li><b>Acute</b>: measure less than 90°.</li><li><b>Right</b>: measure 90°.</li><li><b>Obtuse</b>: measure more than 90°.</li><li><b>Flat</b>: measure 180°.</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>From lowest to highest amplitude, the angles are classified as: acute, right, obtuse, and flat.</p>',
            ],
            feedback_responses: [
              {
                feedback: '<p>It is a flat angle because it measures 180°.</p>',
              },
              {
                feedback:
                  '<p>It is an obtuse angle because it measures more than 90°.</p>',
              },
              {
                feedback:
                  '<p>It is an acute angle because it measures less than 90°.</p>',
              },
              {
                feedback: '<p>It is a right angle because it measures 90°.</p>',
              },
            ],
          },
          reference: 'eb50ecb3-98ad-45de-8a42-688d5915a5ac',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['Raso', 'Obtuso', 'Agudo', 'Reto'],
            response_container: {
              pointer: 'left',
            },
            stimulus: '<p>Arraste os nomes dos seguintes tipos de ângulos.</p>',
            template:
              '<table style="width: 100%;border:none;"><tbody><tr><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_8.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_6.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_4.svg\'></div></td><td style="width: 25%; text-align: center;border:none;"><div style="display:flex; justify-content:center;"><img src=\'https://blueberry-assets.oneclick.es/M5_G_7e_2.svg\'></div></td></tr><tr><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td><td style="width: 25%; text-align: center;border:none;">{{response}}</td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Raso', 'Obtuso', 'Agudo', 'Reto'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Os ângulos são classificados em:</p><ul><li><b>Agudos</b>: medem menos de 90°.</li><li><b>Retos</b>: medem 90°.</li><li><b>Obtusos</b>: medem mais de 90° e menos de 180º.</li><li><b>Rasos</b>: medem 180°.</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>Da menor para a maior amplitude, os ângulos são classificados em: agudos, retos, obtusos e rasos.</p>',
            ],
            feedback_responses: [
              {
                feedback: '<p>É um ângulo raso porque mede 180°.</p>',
              },
              {
                feedback: '<p>É um ângulo obtuso porque mede mais de 90°.</p>',
              },
              {
                feedback: '<p>É um ângulo agudo porque mede menos de 90°.</p>',
              },
              {
                feedback: '<p>É um ângulo reto porque mede 90°.</p>',
              },
            ],
          },
          reference: '17004f64-ef8c-43d2-ba28-b789ef0b1fb3',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'classification-polygons': [
      {
        es: {
          title: '',
          type: 'clozetext',
          metadata: {
            name: 'Cloze with text',
          },
          data: {
            stimulus:
              '<p>Escribe de qué tipo es este trapecio.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_E_1_i1.svg" width="250"></img></div>',
            template: '<p>Es un trapecio {{response}}.</p>',
            type: 'clozetext',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['isósceles'],
                grouped_responses: [[]],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<table style="width: 100%; margin-left: auto; margin-right: auto"><tbody><tr><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_1.svg" width="250"></img></div><p style="text-align: center"><b>Rectángulo</b></p><p>2 ángulos rectos</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_2.svg" width="250"></img></div><p style="text-align: center"><b>Isósceles</b></p><p>2 pares de ángulos iguales</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_3.svg" width="250"></img></div><p style="text-align: center"><b>Escaleno</b></p><p>4 lados desiguales</p></td></tr></tbody></table>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<table style="width: 100%; margin-left: auto; margin-right: auto"><tbody><tr><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_1.svg" width="250"></img></div><p style="text-align: center"><b>Rectángulo</b></p><p>2 ángulos rectos</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_2.svg" width="250"></img></div><p style="text-align: center"><b>Isósceles</b></p><p>2 pares de ángulos iguales</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_3.svg" width="250"></img></div><p style="text-align: center"><b>Escaleno</b></p><p>4 lados desiguales</p></td></tr></tbody></table>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: '',
                isFloating: true,
              },
            },
            autosizeResponse: false,
            normalization: {
              accents: false,
              spaces: false,
              lower: false,
              isMath: false,
            },
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: 'f5339786-2c5b-4db8-8c79-cecf4aed73cf',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozetext',
          metadata: {
            name: 'Cloze with text',
          },
          data: {
            stimulus:
              '<p>Write what type this trapezoid is.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_E_1_i2.svg" width="250"></img></div>',
            template: '<p>It is a trapezoid {{response}}.</p>',
            type: 'clozetext',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['isósceles'],
                grouped_responses: [[]],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<table style="width: 100%; margin-left: auto; margin-right: auto"><tbody><tr><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_1.svg" width="250"></img></div><p style="text-align: center"><b>Rectangle</b></p><p>2 right angles</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_2.svg" width="250"></img></div><p style="text-align: center"><b>Isosceles</b></p><p>2 pairs of equal angles</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_3.svg" width="250"></img></div><p style="text-align: center"><b>Scalene</b></p><p>4 unequal sides</p></td></tr></tbody></table>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<table style="width: 100%; margin-left: auto; margin-right: auto"><tbody><tr><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_1.svg" width="250"></img></div><p style="text-align: center"><b>Rectangle</b></p><p>2 right angles</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_2.svg" width="250"></img></div><p style="text-align: center"><b>Isosceles</b></p><p>2 pairs of equal angles</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_3.svg" width="250"></img></div><p style="text-align: center"><b>Scalene</b></p><p>4 unequal sides</p></td></tr></tbody></table>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: '',
                isFloating: true,
              },
            },
            autosizeResponse: false,
            normalization: {
              accents: false,
              spaces: false,
              lower: false,
              isMath: false,
            },
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: '08b26194-a128-4cf9-ab9f-a7f0b891e9ee',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozetext',
          metadata: {
            name: 'Cloze with text',
          },
          data: {
            stimulus:
              '<p>Escreva de que tipo é este trapézio.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_E_1_i2.svg" width="250"></img></div>',
            template: '<p>É um trapézio {{response}}.</p>',
            type: 'clozetext',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['isósceles'],
                grouped_responses: [[]],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<table style="width: 100%; margin-left: auto; margin-right: auto"><tbody><tr><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_1.svg" width="250"></img></div><p style="text-align: center"><b>Retângulo</b></p><p>2 ângulos retos</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_2.svg" width="250"></img></div><p style="text-align: center"><b>Isósceles</b></p><p>2 pares de ângulos iguais</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_3.svg" width="250"></img></div><p style="text-align: center"><b>Escaleno</b></p><p>4 lados desiguais</p></td></tr></tbody></table>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<table style="width: 100%; margin-left: auto; margin-right: auto"><tbody><tr><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_1.svg" width="250"></img></div><p style="text-align: center"><b>Retângulo</b></p><p>2 ângulos retos</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_2.svg" width="250"></img></div><p style="text-align: center"><b>Isósceles</b></p><p>2 pares de ângulos iguais</p></td><td style="width: 33%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M8_G_44a_I_3.svg" width="250"></img></div><p style="text-align: center"><b>Escaleno</b></p><p>4 lados desiguais</p></td></tr></tbody></table>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: '',
                isFloating: true,
              },
            },
            autosizeResponse: false,
            normalization: {
              accents: false,
              spaces: false,
              lower: false,
              isMath: false,
            },
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: '0390d7d7-0c68-4c57-8048-38008341c8e7',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'elements-polyhedron': [
      {
        es: {
          title: '',
          type: 'LabelImageDragDropV2',
          metadata: {
            name: 'LabelImageDragDropV2',
          },
          data: {
            image: {
              src: 'https://blueberry-assets.oneclick.es/M5_G_13b_1.png',
              width: 250,
              height: 300,
              alt: '',
              title: '',
              percent: 1,
            },
            fontSize: 11,
            responses: [
              {
                x: 80,
                y: 300,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
              {
                x: 25,
                y: 60,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
              {
                x: 257,
                y: 35,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
            ],
            possible_responses: ['Cara', 'Vértice', 'Arista'],
            stimulus:
              '<p>Arrastra el nombre de estos elementos de un poliedro a su posición.</p>',
            type: 'LabelImageDragDropV2',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Cara', 'Vértice', 'Arista'],
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>Una arista es un segmento de recta que une dos vértices y que hace de frontera entre dos caras.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Los elementos básicos de un poliedro son las caras, las aristas y los vértices.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            sampleText: 'Response',
            duplicate_responses: false,
            shuffle_options: true,
            feedback_responses: [
              {
                feedback:
                  '<p>Las caras son los polígonos que limitan a un poliedro.</p>',
              },
              {
                feedback:
                  '<p>Los vértices son el punto de unión de las aristas.</p>',
              },
              {
                feedback: '<p>Las aristas separan las caras del poliedro.</p>',
              },
            ],
          },
          reference: 'f7ac0180-8964-4a54-80ff-4866496cb797',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'LabelImageDragDropV2',
          metadata: {
            name: 'LabelImageDragDropV2',
          },
          data: {
            image: {
              src: 'https://blueberry-assets.oneclick.es/M5_G_13b_1.png',
              width: 250,
              height: 300,
              alt: '',
              title: '',
              percent: 1,
            },
            fontSize: 11,
            responses: [
              {
                x: 80,
                y: 300,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
              {
                x: 25,
                y: 60,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
              {
                x: 257,
                y: 35,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
            ],
            possible_responses: ['Face', 'Vertex', 'Edge'],
            stimulus:
              '<p>Drag the name of these elements of a polyhedron to their position.</p>',
            type: 'LabelImageDragDropV2',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Face', 'Vertex', 'Edge'],
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>An edge is a straight line segment that joins two vertices and acts as a border between two faces.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The basic elements of a polyhedron are the faces, the edges, and the vertices.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            sampleText: 'Response',
            duplicate_responses: false,
            shuffle_options: true,
            feedback_responses: [
              {
                feedback:
                  '<p>The faces are the polygons that limit a polyhedron.</p>',
              },
              {
                feedback:
                  '<p>The vertices are the joining point of the edges.</p>',
              },
              {
                feedback:
                  '<p>The edges separate the faces of the polyhedron.</p>',
              },
            ],
          },
          reference: 'a6c915bb-b28a-4244-a768-156cda6ff8a1',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'LabelImageDragDropV2',
          metadata: {
            name: 'LabelImageDragDropV2',
          },
          data: {
            image: {
              src: 'https://blueberry-assets.oneclick.es/M5_G_13b_1.png',
              width: 250,
              height: 300,
              alt: '',
              title: '',
              percent: 1,
            },
            fontSize: 11,
            responses: [
              {
                x: 80,
                y: 300,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
              {
                x: 25,
                y: 60,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
              {
                x: 257,
                y: 35,
                z: 15,
                width: 120,
                height: 40,
                pointer: '',
              },
            ],
            possible_responses: ['Face', 'Vértice', 'Aresta'],
            stimulus:
              '<p>Arraste o nome destes elementos de um poliedro para a sua posição.</p>',
            type: 'LabelImageDragDropV2',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Face', 'Vértice', 'Aresta'],
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>Uma aresta é um segmento de reta que une dois vértices e que faz fronteira entre duas faces.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Os elementos básicos de um poliedro são as faces, as arestas e os vértices.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            sampleText: 'Response',
            duplicate_responses: false,
            shuffle_options: true,
            feedback_responses: [
              {
                feedback:
                  '<p>As faces são os polígonos que limitam um poliedro.</p>',
              },
              {
                feedback:
                  '<p>Os vértices são o ponto de união das arestas.</p>',
              },
              {
                feedback: '<p>As arestas separam as faces do poliedro.</p>',
              },
            ],
          },
          reference: '302e39e9-0c0e-47bc-91b4-5a9148783da5',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'introduction-cartesian-plane': [
      {
        es: {
          title: '',
          type: 'clozetext',
          metadata: {
            name: 'Cloze with text',
          },
          data: {
            stimulus:
              '<p>Observa este plano y escribe las coordenadas en las que está este objeto.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M3_G_6a_7.svg" width="350"></img></div>',
            template:
              '<p>El pájaro está en la posición <span class="no-break">({{response}}, {{response}}).</span></p>',
            type: 'clozetext',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['A', '2'],
                grouped_responses: [[], []],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>La primera coordenada indica la <b>columna</b>.</p><p>La segunda coordenada indica la <b>fila</b>.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>El pájaro está en (A, 2):</p><ul><li>La primera coordenada (A) indica la <b>columna</b>.</li><li>La segunda coordenada (2) indica la <b>fila</b>.</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: '',
                isFloating: true,
              },
            },
            autosizeResponse: false,
            normalization: {
              accents: false,
              spaces: false,
              lower: false,
              isMath: false,
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '22a32a2b-966b-4563-8171-d6e5b7a41f10',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozetext',
          metadata: {
            name: 'Cloze with text',
          },
          data: {
            stimulus:
              '<p>Look at this plane and write the coordinates where this object is.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M3_G_6a_7.svg" width="350"></img></div>',
            template:
              '<p>The bird is in the position <span class="no-break">({{response}}, {{response}}).</span></p>',
            type: 'clozetext',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['A', '2'],
                grouped_responses: [[], []],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>The first coordinate indicates the <b>column</b>.</p><p>The second coordinate indicates the <b>row</b>.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The bird is in (A, 2):</p><ul><li>The first coordinate (A) indicates the <b>column</b>.</li><li>The second coordinate (2) indicates the <b>row</b>.</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: '',
                isFloating: true,
              },
            },
            autosizeResponse: false,
            normalization: {
              accents: false,
              spaces: false,
              lower: false,
              isMath: false,
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '965631a4-b9f2-4101-a308-ef3474fda127',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozetext',
          metadata: {
            name: 'Cloze with text',
          },
          data: {
            stimulus:
              '<p>Observe este plano e escreva as coordenadas onde este objeto está.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M3_G_6a_7.svg" width="350"></img></div>',
            template:
              '<p>O pássaro está na posição <span class="no-break">({{response}}, {{response}}).</span></p>',
            type: 'clozetext',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['A', '2'],
                grouped_responses: [[], []],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>A primeira coordenada indica a <b>coluna</b>.</p><p>A segunda coordenada indica a <b>linha</b>.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>O pássaro está em (A, 2):</p><ul><li>A primeira coordenada (A) indica a <b>coluna</b>.</li><li>A segunda coordenada (2) indica a <b>linha</b>.</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: '',
                isFloating: true,
              },
            },
            autosizeResponse: false,
            normalization: {
              accents: false,
              spaces: false,
              lower: false,
              isMath: false,
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '39bf26d6-71ad-4aff-b58a-c2d906a2d2df',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'cartesian-plane': [
      {
        es: {
          title: '',
          type: 'coordinateaxes',
          metadata: {
            name: 'Coordinate axes',
          },
          data: {
            type: 'coordinateaxes',
            stimulus: '<p>Sitúa estos puntos en el plano cartesiano.</p>',
            grid_size: 10,
            grid_full: false,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    x: 7,
                    y: 4,
                  },
                  {
                    x: 9,
                    y: 0,
                  },
                  {
                    x: 10,
                    y: 1,
                  },
                  {
                    x: 6,
                    y: 3,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              theme: 'theme-turquoise',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Un punto en el plano se define con dos coordenadas:</p><ul><li>La <b>primera</b> es del eje <b>horizontal</b>.</li><li>La <b>segunda</b>, del eje <b>vertical</b>.</li></ul><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M6_G_9a_8.jpg"></img></div>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>La primera coordenada se corresponde con el eje horizontal.</p><p>La segunda coordenada, con el eje vertical.</p>',
            ],
            isEvaluable: true,
          },
          reference: '378eec06-b5d9-4618-82be-3cc0e198ff41',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'coordinateaxes',
          metadata: {
            name: 'Coordinate axes',
          },
          data: {
            type: 'coordinateaxes',
            stimulus: '<p>Place these points on the Cartesian plane.</p>',
            grid_size: 10,
            grid_full: false,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    x: 6,
                    y: 8,
                  },
                  {
                    x: 10,
                    y: 2,
                  },
                  {
                    x: 5,
                    y: 4,
                  },
                  {
                    x: 9,
                    y: 7,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              theme: 'theme-turquoise',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>A point on the plane is defined by two coordinates:</p><ul><li>The <b>first</b> corresponds to the <b>horizontal</b> axis.</li><li>The <b>second</b> corresponds to the <b>vertical</b> axisThe first coordinate corresponds to the horizontal axis.</li></ul><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M6_G_9a_8.jpg"></img></div>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>The first coordinate corresponds to the horizontal axis.</p><p>The second coordinate, to the vertical axis.</p>',
            ],
            isEvaluable: true,
          },
          reference: '3f2ebafe-e7b7-490a-bb80-aa7e55f5db29',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'coordinateaxes',
          metadata: {
            name: 'Coordinate axes',
          },
          data: {
            type: 'coordinateaxes',
            stimulus: '<p>Marque estes pontos no plano cartesiano.</p>',
            grid_size: 10,
            grid_full: false,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    x: 1,
                    y: 10,
                  },
                  {
                    x: 7,
                    y: 5,
                  },
                  {
                    x: 8,
                    y: 4,
                  },
                  {
                    x: 6,
                    y: 9,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              theme: 'theme-turquoise',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                'Um ponto no plano é definido por duas coordenadas:</p><ul><li>A <b>primeira</b> corresponde ao eixo <b>horizontal</b>.</li><li>A <b>segunda</b> corresponde ao eixo <b>vertical</b>.</li></ul><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M6_G_9a_8.jpg"></img></div>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>A primeira coordenada corresponde ao eixo horizontal.</p><p>A segunda coordenada, ao eixo vertical.</p>',
            ],
            isEvaluable: true,
          },
          reference: 'c62409d1-6cb6-4ab0-b850-401504564309',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'area-plane-figures-decomposition': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'transformations-plane': [
      {
        es: {
          title: '',
          type: 'Transformations in plane',
          metadata: {
            name: 'Transformations in plane',
          },
          data: {
            type: 'Transformations in plane',
            stimulus:
              '<p>Refleja la figura con respecto al eje de simetría.</p>',
            figure: {
              preset: 2,
              theme: '',
              x: 5,
              y: 6,
              rotation: 2,
              isFlipped: true,
              pivot: {
                position: null,
                label: '',
              },
            },
            grid: {
              width: 20,
              height: 10,
              symmetry: 'HORIZONTAL',
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    type: 'SYMMETRY',
                    transformations: {
                      axis: 'HORIZONTAL',
                    },
                    isFlipped: true,
                  },
                ],
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
              controls_position: 'BOTTOM',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>La figura simétrica es el resultado de mover cada vértice de la figura original en su punto simétrico con respecto al eje.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Imagina cuál sería el punto simétrico de cada vértice por separado.</p>',
            ],
          },
          extraValues: {},
          reference: '82f59aee-d9fd-4fae-8e98-a180e18168a6',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'Transformations in plane',
          metadata: {
            name: 'Transformations in plane',
          },
          data: {
            type: 'Transformations in plane',
            stimulus:
              '<p>Reflect the figure with respect to the axis of symmetry.</p>',
            figure: {
              preset: 6,
              theme: '',
              x: 13,
              y: 0,
              rotation: 3,
              isFlipped: true,
              pivot: {
                position: null,
                label: '',
              },
            },
            grid: {
              width: 20,
              height: 10,
              symmetry: 'VERTICAL',
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    type: 'SYMMETRY',
                    transformations: {
                      axis: 'VERTICAL',
                    },
                    isFlipped: true,
                  },
                ],
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
              controls_position: 'BOTTOM',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The symmetrical figure is the result of moving each vertex of the original figure to its symmetrical point with respect to the axis.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Imagine what the symmetrical point of each vertex would be separately.</p>',
            ],
          },
          extraValues: {},
          reference: '9268735a-6f5d-4ce3-8d7d-88b4eebf0238',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'Transformations in plane',
          metadata: {
            name: 'Transformations in plane',
          },
          data: {
            type: 'Transformations in plane',
            stimulus: '<p>Reflete a figura em relação ao eixo de simetria.</p>',
            figure: {
              preset: 2,
              theme: '',
              x: 0,
              y: 2,
              rotation: 3,
              isFlipped: true,
              pivot: {
                position: null,
                label: '',
              },
            },
            grid: {
              width: 20,
              height: 10,
              symmetry: 'HORIZONTAL',
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    type: 'SYMMETRY',
                    transformations: {
                      axis: 'HORIZONTAL',
                    },
                    isFlipped: true,
                  },
                ],
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
              controls_position: 'BOTTOM',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>A figura simétrica é o resultado de mover cada vértice da figura original para o seu ponto simétrico em relação ao eixo.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Imagine qual seria o ponto simétrico de cada vértice separadamente.</p>',
            ],
          },
          extraValues: {},
          reference: 'd78fdeb6-aefb-489b-a900-e88aa82f2d3c',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
  },
  'magnitudes-and-measurements': {
    'analog-clocks': [
      {
        es: {
          title: '',
          type: 'clock',
          metadata: {
            name: 'Clock',
          },
          data: {
            stimulus:
              '<p>Mueve las agujas del reloj para que marque las 5 y diez.</p>',
            type: 'clock',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [5, 10],
              },
              penalty: 0,
            },
            ui_style: {
              type: 'analog',
              time_system: '24H',
              theme: 'dark',
              step: 1,
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>La aguja corta marca las horas.</p><p>La aguja larga marca los minutos.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>La aguja corta marca las horas.</p><p>La aguja larga marca los minutos.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'c8efdad8-27f7-4363-822d-a43f17c07bbd',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clock',
          metadata: {
            name: 'Clock',
          },
          data: {
            stimulus:
              '<p>Move the hands of the clock so that it marks the ten past 2.</p>',
            type: 'clock',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [2, 10],
              },
              penalty: 0,
            },
            ui_style: {
              type: 'analog',
              time_system: '24H',
              theme: 'dark',
              step: 1,
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>The short hand marks the hours.</p><p>The long hand marks the minutes.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The short hand marks the hours.</p><p>The long hand marks the minutes.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'ceb95113-4196-4291-b6fa-c6c196f8c6c7',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clock',
          metadata: {
            name: 'Clock',
          },
          data: {
            stimulus:
              '<p>Mova os ponteiros do relógio para marcar quinze para as 4.</p>',
            type: 'clock',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [3, 45],
              },
              penalty: 0,
            },
            ui_style: {
              type: 'analog',
              time_system: '24H',
              theme: 'dark',
              step: 1,
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>O ponteiro curto marca as horas.</p><p>O ponteiro longo marca os minutos.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>O ponteiro curto marca as horas.</p><p>O ponteiro longo marca os minutos.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '918476bc-b8a4-48a0-8575-542d626b5d4a',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'digital-clocks': [
      {
        es: {
          title: '',
          type: 'clock',
          metadata: {
            name: 'Clock',
          },
          data: {
            stimulus:
              '<p>Cambia los números del reloj para que marque las 8 menos cuarto.</p>',
            type: 'clock',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [7, 45],
              },
              penalty: 0,
            },
            ui_style: {
              type: 'digital',
              time_system: '24H',
              theme: 'dark',
              step: 1,
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>El número que se encuentra a la izquierda de los dos puntos marca las horas</p><p>El número que está a la derecha marca los minutos.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>El número que se encuentra a la izquierda de los dos puntos marca las horas</p><p>El número que está a la derecha marca los minutos.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '2551d74c-c099-4b70-8163-ae20bda203db',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clock',
          metadata: {
            name: 'Clock',
          },
          data: {
            stimulus:
              '<p>Change the numbers on the clock so that it shows the 3 o’clock.</p>',
            type: 'clock',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [3, 0],
              },
              penalty: 0,
            },
            ui_style: {
              type: 'digital',
              time_system: '24H',
              theme: 'dark',
              step: 1,
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>The number that is to the left of the two points marks the hours.</p><p>The number that is to the right marks the minutes.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The number that is to the left of the two points marks the hours.</p><p>The number that is to the right marks the minutes.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'fa6d0bf1-8a5f-4c61-903d-aa900a06598e',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clock',
          metadata: {
            name: 'Clock',
          },
          data: {
            stimulus: '<p>Ajuste o relógio para marcar 9 e quinze.</p>',
            type: 'clock',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [9, 15],
              },
              penalty: 0,
            },
            ui_style: {
              type: 'digital',
              time_system: '24H',
              theme: 'dark',
              step: 1,
              customClass: '',
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            hints: [
              '<p>O número que está à esquerda dos dois pontos marca as horas.</p><p>O número que está à direita marca os minutos.</p>',
            ],
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>O número que está à esquerda dos dois pontos marca as horas.</p><p>O número que está à direita marca os minutos.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'ae8516f0-d2da-4f7a-8b3c-9a964789f84d',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'days-week-and-months': [
      {
        es: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: [
              'domingo',
              '13',
              '11',
              '28',
              'martes',
              'jueves',
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus: '<p>Arrastra para completar la oración.</p>',
            template:
              '<p>Si hoy es sábado 12,</p><p>mañana será {{response}} {{response}}.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['domingo', '13'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 33.3333%; background-color: #72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Ayer</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Hoy</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Mañana</b></div></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">viernes</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">sábado</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><b>domingo</b></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">11</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">12</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><b>13</b></td></tr></tbody></table>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 33.3333%; background-color: #72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Ayer</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Hoy</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Mañana</b></div></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">viernes</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">sábado</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><span style="color:#72D2CD";><b>¿?</b></span></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">11</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">12</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><span style="color:#72D2CD";><b>¿?</b></span></td></tr></tbody></table>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '7cb2a031-219f-48ad-85a3-32f635831ec9',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: [
              'Saturday',
              '24',
              '27',
              '10',
              'Friday',
              'Sunday',
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus: '<p>Drag to complete the sentence.</p>',
            template:
              '<p>If today is Friday 23,</p><p>tomorrow will be {{response}} {{response}}.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Saturday', '24'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 33.3333%; background-color: #72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Yesterday</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Today</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Tomorrow</b></div></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">Thursday</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">Friday</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><b>Saturday</b></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">22</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">23</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><b>24</b></td></tr></tbody></table>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 33.3333%; background-color: #72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Yesterday</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Today</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Tomorrow</b></div></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">Thursday</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">Friday</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><span style="color:#72D2CD";><b>¿?</b></span></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">22</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">23</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><span style="color:#72D2CD";><b>¿?</b></span></td></tr></tbody></table>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'c7024b15-08cf-4c6b-bafe-074cc18456b4',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: [
              'terça-feira',
              '20',
              '6',
              '27',
              'domingo',
              'segunda-feira',
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus: '<p>Arraste para completar a frase.</p>',
            template:
              '<p>Se hoje é segunda-feira, dia 19,</p><p>então amanhã será {{response}}, dia {{response}}.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['terça-feira', '20'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 33.3333%; background-color: #72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Ontem</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Hoje</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Amanhã</b></div></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">domingo</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">segunda-feira</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><b>terça-feira</b></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">18</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">19</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><b>20</b></td></tr></tbody></table>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 33.3333%; background-color: #72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Ontem</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Hoje</b></div></td><td style="width: 33.3333%; background-color:#72D2CD; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><b>Amanhã</b></div></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">domingo</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">segunda-feira</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><span style="color:#72D2CD";><b>¿?</b></span></td></tr><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle;">18</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;">19</td><td style="width: 33.3333%; text-align: center; vertical-align: middle;"><span style="color:#72D2CD";><b>¿?</b></span></td></tr></tbody></table>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '798a91a7-d19e-469f-b59f-f3fceb13cd9d',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'ordering-routines': [
      {
        es: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['Mañana', 'Tarde', 'Noche'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>¿Cuándo haces estas acciones? Arrastra las palabras debajo de cada imagen.</p>',
            template:
              '<table style="width: 100%;"><tbody><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_3.svg" width="200"></img></div></td><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_14.svg" width="200"></img></div></td><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_16.svg" width="200"></img></div></td></tr><tr><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Mañana', 'Tarde', 'Noche'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Piensa en tus rutinas diarias: levantarte, desayunar, ir al colegio…</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>Piensa en tus rutinas diarias: levantarte, desayunar, ir al colegio…</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '8bf6c8d7-fe38-4475-975b-6ee38af62f33',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['Morning', 'Afternoon', 'Night'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>When do you do these actions? Drag the words below each image.</p>',
            template:
              '<table style="width: 100%;"><tbody><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_1.svg" width="200"></img></div></td><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_12.svg" width="200"></img></div></td><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_10.svg" width="200"></img></div></td></tr><tr><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Morning', 'Afternoon', 'Night'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Think about your daily routines: getting up, having breakfast, going to school…</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>Think about your daily routines: getting up, having breakfast, going to school…</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '719c44fa-06a6-454a-8e2c-0552bfc65a3f',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['Manhã', 'Tarde', 'Noite'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Quando você faz estas atividades? Arraste as palavras até as imagens.</p>',
            template:
              '<table style="width: 100%;"><tbody><tr><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_3.svg" width="200"></img></div></td><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_12.svg" width="200"></img></div></td><td style="width: 33.3333%; text-align: center; vertical-align: middle; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_11a_9.svg" width="200"></img></div></td></tr><tr><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td><td style="width: 33.3333%; border: none;"><div style="display:flex; justify-content:center;">{{response}}</div></td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['Manhã', 'Tarde', 'Noite'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Pense em suas rotinas diárias: levantar-se, tomar café da manhã, ir à escola…</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>Pense em suas rotinas diárias: levantar-se, tomar café da manhã, ir à escola…</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '2e8afd13-22d0-4f86-b5ec-1839d331b01e',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'volume-units': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'coins-bills': [
      {
        es: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Escribe cuánto dinero hay aquí:</p><div style="display:flex; flex-wrap:wrap; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_9.png" width="120"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_9.png" width="120"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_9.png" width="120"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_9.png" width="120"></div><div style="display:flex; flex-wrap:wrap; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_3.png" width="80"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_3.png" width="80"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_3.png" width="80"></div>',
            template: '<p>Hay {{response}} € y {{response}} céntimos.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '20',
                  },
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '15',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p style="text-align: center">4 billetes de 5 € = 20 €</p><p style="text-align: center">3 monedas de 5 céntimos = 15 céntimos</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<table style="width: 100%;"><tbody><tr><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_1.png" width="65"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_2.png" width="75"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_3.png" width="85"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_4.png" width="80"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_5.png" width="90"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_6.png" width="95"></img></div></td></tr><tr><td style="width: 16.66%; text-align: center; border: none;">1 céntimo</td><td style="width: 16.66%; text-align: center; border: none;">2 céntimos</td><td style="width: 16.66%; text-align: center; border: none;">5 céntimos</td><td style="width: 16.66%; text-align: center; border: none;">10 céntimos</td><td style="width: 16.66%; text-align: center; border: none;">20 céntimos</td><td style="width: 16.66%; text-align: center; border: none;">50 céntimos</td></tr></tbody></table><table style="width: 100%;"><tbody><tr><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_7.png" width="95"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_8.png" width="100"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_9.png" width="150"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_10.png" width="150"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_11.png" width="150"></img></div></td></tr><tr><td style="width: 20%; text-align: center; border: none;">1 euro</td><td style="width: 20%; text-align: center; border: none;">2 euros</td><td style="width: 20%; text-align: center; border: none;">5 euros</td><td style="width: 20%; text-align: center; border: none;">10 euros</td><td style="width: 20%; text-align: center; border: none;">20 euros</td></tr></tbody></table>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'a29c54f2-cd1d-4aae-b756-2aed9c98c850',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Type how much money is here:</p><div style="display:flex; flex-wrap:wrap; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_30.png" width="150"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_30.png" width="150"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_30.png" width="150"></div><div style="display:flex; flex-wrap:wrap; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_24a.png" width="70"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_24a.png" width="70"></div>',
            template: '<p>There are ${{response}} and {{response}} cents.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '15',
                  },
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '10',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p style="text-align: center">3 $5 bills = $15</p><p style="text-align: center">2 5 cent coins = 10 cents</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<table style="width: 100%;"><tbody><tr><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_23a.png" width="65"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_24a.png" width="75"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_25a.png" width="65"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_26a.png" width="80"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_27.png" width="90"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_28.png" width="95"></img></div></td></tr><tr><td style="width: 16.66%; text-align: center; border: none;">1 cent</td><td style="width: 16.66%; text-align: center; border: none;">5 cents</td><td style="width: 16.66%; text-align: center; border: none;">10 cents</td><td style="width: 16.66%; text-align: center; border: none;">25 cents</td><td style="width: 16.66%; text-align: center; border: none;">50 cents</td><td style="width: 16.66%; text-align: center; border: none;">1 dollar</td></tr></tbody></table><table style="width: 100%;"><tbody><tr><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_29.png" width="95"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_30.png" width="100"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_31.png" width="150"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_32.png" width="150"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_33.png" width="150"></img></div></td></tr><tr><td style="width: 20%; text-align: center; border: none;">2 dollars</td><td style="width: 20%; text-align: center; border: none;">5 dollars</td><td style="width: 20%; text-align: center; border: none;">10 dollars</td><td style="width: 20%; text-align: center; border: none;">20 dollars</td><td style="width: 20%; text-align: center; border: none;">50 dollars</td></tr></tbody></table>\n',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'ecc6d4ee-cf5a-42fa-8d3f-d45f7379e7f3',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Escreva o valor total destas notas e moedas.</p><div style="display:flex; flex-wrap:wrap; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_19.png" width="150"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_19.png" width="150"></div><div style="display:flex; flex-wrap:wrap; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_13.png" width="70"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_13.png" width="70"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_13.png" width="70"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_13.png" width="70"></div>',
            template: '<p>São {{response}} reais e {{response}} centavos.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '10',
                  },
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '20',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p style="text-align: center">2 notas de R$ 5 = R$ 10</p><p style="text-align: center">4 moedas de 5 centavos = 20 centavos</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<table style="width: 100%;"><tbody><tr><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_MyM_14a_1.png" width="65"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_13.png" width="75"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_14.png" width="65"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_15.png" width="80"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_16.png" width="90"></img></div></td><td style="width: 16.66%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_17.png" width="95"></img></div></td></tr><tr><td style="width: 16.66%; text-align: center; border: none;">1 centavo</td><td style="width: 16.66%; text-align: center; border: none;">5 centavos</td><td style="width: 16.66%; text-align: center; border: none;">10 centavos</td><td style="width: 16.66%; text-align: center; border: none;">25 centavos</td><td style="width: 16.66%; text-align: center; border: none;">50 centavos</td><td style="width: 16.66%; text-align: center; border: none;">1 real</td></tr></tbody></table><table style="width: 100%;"><tbody><tr><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_18.png" width="95"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_19.png" width="100"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_20.png" width="150"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_21.png" width="150"></img></div></td><td style="width: 20%; text-align: center; border: none;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M2_MyM_5a_22.png" width="150"></img></div></td></tr><tr><td style="width: 20%; text-align: center; border: none;">2 reais</td><td style="width: 20%; text-align: center; border: none;">5 reais</td><td style="width: 20%; text-align: center; border: none;">10 reais</td><td style="width: 20%; text-align: center; border: none;">20 reais</td><td style="width: 20%; text-align: center; border: none;">50 reais</td></tr></tbody></table>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'ffd3350a-7861-45eb-a392-11688632e154',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'volume-geometric-bodies': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
  },
  'probability-and-statistics': {
    'understanding-frequency-tables': [
      {
        es: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['3', '3', '4'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Arrastra el número de animales de cada tipo.</p><div style="display:flex; justify-content:center; "><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_20.svg" width="350"></img></div>',
            template:
              '<table style="width: 80%; margin-left: auto; margin-right: auto; background: none !important;"><tbody><tr><td style="width: 15%; text-align: center; border: none; vertical-align: middle;"></td><td style="width: 25%; text-align: center; "><div style="display:flex; justify-content:center; vertical-align: middle;"><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_2.svg" width="100"></img></div></td><td style="width: 25%; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_4a_2.svg" width="150"></img></div></td><td style="width: 25%; text-align: center; "><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_3.svg" width="100"></img></div></td></tr><tr><td style="width: 25%; text-align: center; background-color: #72D2CD; vertical-align: middle;"><strong><span style="color: rgb(255, 255, 255);">Animales</span></strong></td><td style="width: 15%; text-align: center; vertical-align: middle;">{{response}}</td><td style="width: 25%; text-align: center; vertical-align: middle;">{{response}}</td><td style="width: 25%; text-align: center; vertical-align: middle;">{{response}}</td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['3', '3', '4'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Hay 3 hormigas.</p><p>Hay 3 abejas.</p><p>Hay 4 caracoles.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: ['<p>Hay 3 hormigas.</p>'],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'cc071339-122a-4f77-9a4a-72a7a7cc24e2',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['2', '3', '5'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Drag the number of each type of animal.</p><div style="display:flex; justify-content:center; "><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_21.svg" width="350"></img></div>',
            template:
              '<table style="width: 80%; margin-left: auto; margin-right: auto; background: none !important;"><tbody><tr><td style="width: 15%; text-align: center; border: none; vertical-align: middle;"></td><td style="width: 25%; text-align: center; "><div style="display:flex; justify-content:center; vertical-align: middle;"><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_2.svg" width="100"></img></div></td><td style="width: 25%; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_4a_2.svg" width="150"></img></div></td><td style="width: 25%; text-align: center; "><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_3.svg" width="100"></img></div></td></tr><tr><td style="width: 25%; text-align: center; background-color: #72D2CD; vertical-align: middle;"><strong><span style="color: rgb(255, 255, 255);">Animals</span></strong></td><td style="width: 15%; text-align: center; vertical-align: middle;">{{response}}</td><td style="width: 25%; text-align: center; vertical-align: middle;">{{response}}</td><td style="width: 25%; text-align: center; vertical-align: middle;">{{response}}</td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['2', '3', '5'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>There are 2 ants.</p><p>There are 3 bees.</p><p>There are 5 snails.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: ['<p>There are 2 ants.</p>'],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '3d675383-68b8-4db7-9d2d-19ab33216277',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: ['4', '2', '3'],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Arraste o número de animais de cada tipo.</p><div style="display:flex; justify-content:center; "><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_1.svg" width="350"></img></div>',
            template:
              '<table style="width: 80%; margin-left: auto; margin-right: auto; background: none !important;"><tbody><tr><td style="width: 15%; text-align: center; border: none; vertical-align: middle;"></td><td style="width: 25%; text-align: center; "><div style="display:flex; justify-content:center; vertical-align: middle;"><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_2.svg" width="100"></img></div></td><td style="width: 25%; text-align: center; vertical-align: middle;"><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_4a_2.svg" width="150"></img></div></td><td style="width: 25%; text-align: center; "><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_EyP_1a_3.svg" width="100"></img></div></td></tr><tr><td style="width: 25%; text-align: center; background-color: #72D2CD; vertical-align: middle;"><strong><span style="color: rgb(255, 255, 255);">Quantidade</span></strong></td><td style="width: 15%; text-align: center; vertical-align: middle;">{{response}}</td><td style="width: 25%; text-align: center; vertical-align: middle;">{{response}}</td><td style="width: 25%; text-align: center; vertical-align: middle;">{{response}}</td></tr></tbody></table>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['4', '2', '3'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Há 4 formigas.</p><p>Há 2 abelhas.</p><p>Há 3 caracóis.</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: ['<p>Há 4 formigas.</p>'],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'f28948dd-9625-4813-8f7a-2aebe6d4c19e',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'interpreting-bar-graphs': [
      {
        es: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Estas son las ventas de una papelería.</p><div class="fr-chart ct-chart ct-minor-seventh" data-chart=\'{"type": "bar", "series": [{"name": "Ventas", "data": [6,9,8]}], "labels":["Bolígrafos","Lápices","Gomas de borrar"],"options": {"axisY": {"onlyInteger": true}}}\'></div><p>Completa la oración.</p>',
            template: '<p>Ha vendido {{response}} bolígrafos.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '6',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>La altura de cada barra representa el número de materiales vendidos:</p><ul><li>6 bolígrafos</li><li>9 lápices</li><li>8 gomas de borrar</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<p>La altura de cada barra representa el número de materiales vendidos.</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: '6207b4c5-1a50-407c-ab55-02ad86b733e9',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>These are the sales of a stationery store.</p><div class="fr-chart ct-chart ct-minor-seventh" data-chart=\'{"type": "bar", "series": [{"name": "Sales", "data": [4,6,9]}], "labels":["Pens","Erasers","Pencils"],"options": {"axisY": {"onlyInteger": true}}}\'></div><p>Fill in the blank.</p>',
            template: '<p>{{response}} pens have been sold.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '4',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The height of each bar represents the number of materials sold:</p><ul><li>4 pens</li><li>6 erasers</li><li>9 pencils</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<p>The height of each bar represents the number of materials sold.</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: 'ff52b097-de7f-4ac5-b405-f384d0015a80',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Estas são as vendas de uma papelaria.</p><div class="fr-chart ct-chart ct-minor-seventh" data-chart=\'{"type": "bar", "series": [{"name": "Vendas", "data": [9,7,4]}], "labels":["Lápis","Canetas","Borrachas"],"options": {"axisY": {"onlyInteger": true}}}\'></div><p>Complete a frase.</p>',
            template: '<p>A papelaria vendeu {{response}} lápis.</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '9',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>A altura de cada barra representa o número de materiais vendidos:</p><ul><li>9 lápis</li><li>7 canetas</li><li>4 borrachas</li></ul>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'NUMERICAL',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: [
              '<p>A altura de cada barra representa o número de materiais vendidos.</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
            ],
          },
          reference: '670dbd88-12c3-4a8d-a818-1e5d63d653f1',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'bar-charts': [
      {
        es: {
          title: '',
          type: 'pictograph',
          metadata: {
            name: 'Pictograph',
          },
          data: {
            type: 'pictograph',
            stimulus:
              '<p>Después del cumpleños de Carla, sus amigos se pudieron llevar los globos a casa. En la tabla aparecen los que se llevaron tres amigos. Completa el pictograma usando esa información.</p><p>Ten en cuenta que cada icono representa <u>2 globos</u>.</p>',
            chart_data: {
              data: [
                {
                  id: '0',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Celia',
                  y: 0,
                },
                {
                  id: '1',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Blanca',
                  y: 0,
                },
                {
                  id: '2',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Óliver',
                  y: 0,
                },
              ],
              name: '',
              y_axis_label: 'Globos',
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 8,
              multiplier_y_value: 2,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    id: '0',
                    x: 'Celia',
                    y: 4,
                  },
                  {
                    id: '1',
                    x: 'Blanca',
                    y: 5,
                  },
                  {
                    id: '2',
                    x: 'Óliver',
                    y: 3,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'LEFT',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>En un pictograma, cada columna de iconos representa una cantidad.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Marca en el gráfico los globos que tiene cada uno.</p>',
            ],
            isEvaluable: true,
          },
          reference: 'dfe88f19-030c-4bbd-9fe1-148807960276',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'pictograph',
          metadata: {
            name: 'Pictograph',
          },
          data: {
            type: 'pictograph',
            stimulus:
              '<p>After Carla’s birthday, her friends were able to take the balloons home. The table shows the ones that three friends took. Fill in the pictogram using this information.</p><p>Keep in mind that each icon represents <u>2 balloons</u>.</p>',
            chart_data: {
              data: [
                {
                  id: '0',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Celia',
                  y: 0,
                },
                {
                  id: '1',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Blanca',
                  y: 0,
                },
                {
                  id: '2',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Oliver',
                  y: 0,
                },
              ],
              name: '',
              y_axis_label: 'Balloons',
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 8,
              multiplier_y_value: 2,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    id: '0',
                    x: 'Celia',
                    y: 5,
                  },
                  {
                    id: '1',
                    x: 'Blanca',
                    y: 4,
                  },
                  {
                    id: '2',
                    x: 'Oliver',
                    y: 2,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'LEFT',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>In a pictogram, each column of icons represents a quantity.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['<p>Mark on the graph the balloons that each one has.</p>'],
            isEvaluable: true,
          },
          reference: 'ca13feaf-720b-4e75-890e-63ba148465cc',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'pictograph',
          metadata: {
            name: 'Pictograph',
          },
          data: {
            type: 'pictograph',
            stimulus:
              '<p>Depois do aniversário da Maria, seus amigos puderam levar os balões para casa. A tabela a seguir mostra quantos balões foram levados por três amigos. Complete o pictograma usando esta informação.</p><p>Leve em conta que cada ícone representa <u>2 balões</u>.</p>',
            chart_data: {
              data: [
                {
                  id: '0',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Otávio',
                  y: 0,
                },
                {
                  id: '1',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Bruna',
                  y: 0,
                },
                {
                  id: '2',
                  src: 'https://blueberry-assets.oneclick.es/M5_EyP_6a_12.svg',
                  x: 'Felipe',
                  y: 0,
                },
              ],
              name: '',
              y_axis_label: 'Balões',
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 8,
              multiplier_y_value: 2,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    id: '0',
                    x: 'Otávio',
                    y: 6,
                  },
                  {
                    id: '1',
                    x: 'Bruna',
                    y: 2,
                  },
                  {
                    id: '2',
                    x: 'Felipe',
                    y: 5,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'LEFT',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Em um pictograma, cada ícone representa uma quantidade.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Marque no gráfico o número de balões que cada amigo levou.</p>',
            ],
            isEvaluable: true,
          },
          reference: '6163c1d6-d33b-4258-82e4-50604489a0bb',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'single-double-bar-charts': [
      {
        es: {
          title: '',
          type: 'barchart',
          metadata: {
            name: 'Bar chart',
          },
          data: {
            type: 'barchart',
            stimulus:
              '<p>Estos son el número de cuadros que han pintado estos tres artistas en el último año. Construye la gráfica a partir de estos datos.</p>',
            chart_data: {
              data: [
                {
                  id: '0',
                  src: '',
                  x: 'Lara',
                  y: [0, 0],
                },
                {
                  id: '1',
                  src: '',
                  x: 'Aitor',
                  y: [0, 0],
                },
                {
                  id: '2',
                  src: '',
                  x: 'Neizan',
                  y: [0, 0],
                },
              ],
              name: '',
              y_axis_labels: [
                {
                  label: 'Retratos',
                  theme: 'theme-violet',
                },
                {
                  label: 'Paisajes',
                  theme: 'theme-orange',
                },
              ],
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 10,
              min_y_value: 0,
              multiplier_y_value: 1,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    id: '0',
                    x: 'Lara',
                    y: [3, 6],
                  },
                  {
                    id: '1',
                    x: 'Aitor',
                    y: [8, 1],
                  },
                  {
                    id: '2',
                    x: 'Neizan',
                    y: [4, 2],
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'ABOVE',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>La altura de las barras representan el número de cuadros.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>La altura de las barras representan el número de cuadros.</p>',
            ],
            isEvaluable: true,
          },
          reference: '97c85749-ac27-4bf8-aaf0-b71b9f448310',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'barchart',
          metadata: {
            name: 'Bar chart',
          },
          data: {
            type: 'barchart',
            stimulus:
              '<p>These are the number of pictures these three artists have painted in the last year. Construct the graph from these data.</p>',
            chart_data: {
              data: [
                {
                  id: '0',
                  src: '',
                  x: 'Sarah',
                  y: [0, 0],
                },
                {
                  id: '1',
                  src: '',
                  x: 'Eddie',
                  y: [0, 0],
                },
                {
                  id: '2',
                  src: '',
                  x: 'Nathan',
                  y: [0, 0],
                },
              ],
              name: '',
              y_axis_labels: [
                {
                  label: 'Portraits',
                  theme: 'theme-violet',
                },
                {
                  label: 'Landscapes',
                  theme: 'theme-orange',
                },
              ],
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 10,
              min_y_value: 0,
              multiplier_y_value: 1,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    id: '0',
                    x: 'Sarah',
                    y: [5, 6],
                  },
                  {
                    id: '1',
                    x: 'Eddie',
                    y: [8, 3],
                  },
                  {
                    id: '2',
                    x: 'Nathan',
                    y: [7, 1],
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'ABOVE',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The height of the bars represents the number of pictures.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>The height of the bars represents the number of pictures.</p>',
            ],
            isEvaluable: true,
          },
          reference: 'd474cc03-d6a9-4f5b-895c-e52a7a4a2571',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'barchart',
          metadata: {
            name: 'Bar chart',
          },
          data: {
            type: 'barchart',
            stimulus:
              '<p>Este é o número de quadros que esses três artistas pintaram no último ano. Construa o gráfico a partir desses dados.</p>',
            chart_data: {
              data: [
                {
                  id: '0',
                  src: '',
                  x: 'Clarice',
                  y: [0, 0],
                },
                {
                  id: '1',
                  src: '',
                  x: 'Leandro',
                  y: [0, 0],
                },
                {
                  id: '2',
                  src: '',
                  x: 'Paulo',
                  y: [0, 0],
                },
              ],
              name: '',
              y_axis_labels: [
                {
                  label: 'Retratos',
                  theme: 'theme-violet',
                },
                {
                  label: 'Paisagens',
                  theme: 'theme-orange',
                },
              ],
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 10,
              min_y_value: 0,
              multiplier_y_value: 1,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    id: '0',
                    x: 'Clarice',
                    y: [3, 5],
                  },
                  {
                    id: '1',
                    x: 'Leandro',
                    y: [7, 8],
                  },
                  {
                    id: '2',
                    x: 'Paulo',
                    y: [4, 6],
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'ABOVE',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>A altura das barras representa o número de quadros.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>A altura das barras representa o número de quadros.</p>',
            ],
            isEvaluable: true,
          },
          reference: '0d4df68e-80d6-4280-8e35-d5979292b82f',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    histograms: [
      {
        es: {
          title: '',
          type: 'histograms',
          metadata: {
            name: 'Histograms',
          },
          data: {
            type: 'histograms',
            stimulus:
              '<p>Un grupo de científicos ha medido la temperatura durante 24 días registrando los datos en la siguiente tabla. Construye el histograma asociado.</p>',
            chart_data: {
              x_values: [30, 34, 38, 42, 46],
              data: [
                {
                  id: '0',
                  x: '[30, 34)',
                  y: [0],
                },
                {
                  id: '1',
                  x: '[34, 38)',
                  y: [0],
                },
                {
                  id: '2',
                  x: '[38, 42)',
                  y: [0],
                },
                {
                  id: '3',
                  x: '[42, 46)',
                  y: [0],
                },
              ],
              x_axis_name: 'T(ºC)',
              x_axis_label: 'Temperatura',
              y_axis_name: 'Frecuencia absoluta',
              y_axis_label: 'Frecuencia absoluta',
              max_y_value: 10,
              min_y_value: 0,
              multiplier_y_value: 1,
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    id: '0',
                    x: '[30, 34)',
                    y: [9],
                  },
                  {
                    id: '1',
                    x: '[34, 38)',
                    y: [4],
                  },
                  {
                    id: '2',
                    x: '[38, 42)',
                    y: [6],
                  },
                  {
                    id: '3',
                    x: '[42, 46)',
                    y: [5],
                  },
                ],
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'ABOVE',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>La altura de las barras representa el número de días que ha hecho la temperatura del intervalo correspondiente.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>La altura de las barras representa el número de días que ha hecho la temperatura del intervalo correspondiente.</p>',
            ],
          },
          extraValues: {},
          reference: 'aecc7234-cf10-4a3b-b89d-b9441d9c22f1',
          lemonadeVersion: '3.33.2',
        },
        en: {},
        pt: {},
      },
    ],
    'frequency-curves': [
      {
        es: {
          title: '',
          type: 'linechart',
          metadata: {
            name: 'Line chart',
          },
          data: {
            type: 'linechart',
            stimulus:
              '<p>Representa en este polígono de frecuencias la temperatura que ha hecho en una ciudad durante cinco días.',
            chart_data: {
              data: [
                [
                  {
                    x: 'Lunes',
                    y: 0,
                  },
                  {
                    x: 'Martes',
                    y: 0,
                  },
                  {
                    x: 'Miércoles',
                    y: 0,
                  },
                  {
                    x: 'Jueves',
                    y: 0,
                  },
                  {
                    x: 'Viernes',
                    y: 0,
                  },
                ],
              ],
              name: '',
              y_axis_labels: [
                {
                  label: 'Temperatura',
                  theme: 'theme-light-blue',
                },
              ],
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 10,
              min_y_value: 0,
              multiplier_y_value: 1,
              measure: ' °C',
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  [
                    {
                      x: 'Lunes',
                      y: 6,
                    },
                    {
                      x: 'Martes',
                      y: 5,
                    },
                    {
                      x: 'Miércoles',
                      y: 7,
                    },
                    {
                      x: 'Jueves',
                      y: 8,
                    },
                    {
                      x: 'Viernes',
                      y: 1,
                    },
                  ],
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'LEFT',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>La altura que alcanza la línea representa la temperatura de cada día.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>La altura que alcanza la línea representa la temperatura de cada día.</p>',
            ],
            isEvaluable: true,
          },
          reference: 'df85c321-cb9c-48f3-94ad-143f47a7b9f3',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'linechart',
          metadata: {
            name: 'Line chart',
          },
          data: {
            type: 'linechart',
            stimulus:
              '<p>Represent in this frequency polygon the temperature that has been in a city for five days.</p>',
            chart_data: {
              data: [
                [
                  {
                    x: 'Monday',
                    y: 0,
                  },
                  {
                    x: 'Tuesday',
                    y: 0,
                  },
                  {
                    x: 'Wednesday',
                    y: 0,
                  },
                  {
                    x: 'Thursday',
                    y: 0,
                  },
                  {
                    x: 'Friday',
                    y: 0,
                  },
                ],
              ],
              name: '',
              y_axis_labels: [
                {
                  label: 'Temperature',
                  theme: 'theme-light-blue',
                },
              ],
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 10,
              min_y_value: 0,
              multiplier_y_value: 1,
              measure: ' °C',
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  [
                    {
                      x: 'Monday',
                      y: 6,
                    },
                    {
                      x: 'Tuesday',
                      y: 5,
                    },
                    {
                      x: 'Wednesday',
                      y: 7,
                    },
                    {
                      x: 'Thursday',
                      y: 1,
                    },
                    {
                      x: 'Friday',
                      y: 9,
                    },
                  ],
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'LEFT',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The height that the line reaches represents the temperature of each day.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>The height that the line reaches represents the temperature of each day.</p>',
            ],
            isEvaluable: true,
          },
          reference: 'cd5113b1-92db-4bdb-8ba9-17e73fc6d1dc',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'linechart',
          metadata: {
            name: 'Line chart',
          },
          data: {
            type: 'linechart',
            stimulus:
              '<p>Represente neste polígono de frequências a temperatura que fez em uma cidade durante cinco dias.</p>',
            chart_data: {
              data: [
                [
                  {
                    x: 'Segunda-feira',
                    y: 0,
                  },
                  {
                    x: 'Terça-feira',
                    y: 0,
                  },
                  {
                    x: 'Quarta-feira',
                    y: 0,
                  },
                  {
                    x: 'Quinta-feira',
                    y: 0,
                  },
                  {
                    x: 'Sexta-feira',
                    y: 0,
                  },
                ],
              ],
              name: '',
              y_axis_labels: [
                {
                  label: 'Temperatura',
                  theme: 'theme-light-blue',
                },
              ],
              x_axis_label: '',
              y_axis_name: '',
              x_axis_name: '',
              max_y_value: 10,
              min_y_value: 0,
              multiplier_y_value: 1,
              measure: ' °C',
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  [
                    {
                      x: 'Segunda-feira',
                      y: 9,
                    },
                    {
                      x: 'Terça-feira',
                      y: 10,
                    },
                    {
                      x: 'Quarta-feira',
                      y: 8,
                    },
                    {
                      x: 'Quinta-feira',
                      y: 2,
                    },
                    {
                      x: 'Sexta-feira',
                      y: 10,
                    },
                  ],
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              legend_show: false,
              chart_data_show: true,
              chart_data_position: 'LEFT',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>A altura que a linha alcança representa a temperatura de cada dia.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>A altura que a linha alcança representa a temperatura de cada dia.</p>',
            ],
            isEvaluable: true,
          },
          reference: '30ba74e2-9b15-4527-86de-000b9f5155c2',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'pie-charts': [
      {
        es: {
          title: '',
          type: 'piechart',
          metadata: {
            name: 'Pie chart',
          },
          data: {
            type: 'piechart',
            stimulus:
              '<p>Pedro ha recogido minerales de cuatro tipos diferentes. Completa el gráfico de sectores</p>',
            chart_data: {
              data: [
                {
                  theme: 'theme-dark-orange',
                  label: 'Grafito',
                },
                {
                  theme: 'theme-light-blue',
                  label: 'Pirita',
                },
                {
                  theme: 'theme-turquoise',
                  label: 'Magnetita',
                },
                {
                  theme: 'theme-bordeaux',
                  label: 'Cuarzo',
                },
              ],
              name: '',
              labels: ['Mineral', 'Frecuencia'],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    label: 'Grafito',
                    value: 4,
                  },
                  {
                    label: 'Pirita',
                    value: 2,
                  },
                  {
                    label: 'Magnetita',
                    value: 2,
                  },
                  {
                    label: 'Cuarzo',
                    value: 1,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              chart_data_position: 'ABOVE',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Indica cuantos minerales ha recogido en total y luego señala en el gráfico los quesitos que corresponden a cada tipo.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Indica cuantos minerales ha recogido en total y luego señala en el gráfico los quesitos que corresponden a cada tipo.</p>',
            ],
            isEvaluable: true,
          },
          reference: '3cb85543-47df-45b2-b7ac-312d39be7aa0',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'piechart',
          metadata: {
            name: 'Pie chart',
          },
          data: {
            type: 'piechart',
            stimulus:
              '<p>Peter has collected minerals of four different types. Fill in the pie chart</p>',
            chart_data: {
              data: [
                {
                  theme: 'theme-dark-orange',
                  label: 'Graphite',
                },
                {
                  theme: 'theme-light-blue',
                  label: 'Pyrite',
                },
                {
                  theme: 'theme-turquoise',
                  label: 'Magnetite',
                },
                {
                  theme: 'theme-bordeaux',
                  label: 'Quartz',
                },
              ],
              name: '',
              labels: ['Mineral', 'Frequency'],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    label: 'Graphite',
                    value: 3,
                  },
                  {
                    label: 'Pyrite',
                    value: 1,
                  },
                  {
                    label: 'Magnetite',
                    value: 4,
                  },
                  {
                    label: 'Quartz',
                    value: 2,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              chart_data_position: 'ABOVE',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Indicate how many minerals he has collected in total and then point out on the chart the slices that correspond to each type.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Indicate how many minerals he has collected in total and then point out on the chart the slices that correspond to each type.</p>',
            ],
            isEvaluable: true,
          },
          reference: '3ab168c1-f98a-493c-9b40-0c485e6d147d',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'piechart',
          metadata: {
            name: 'Pie chart',
          },
          data: {
            type: 'piechart',
            stimulus:
              '<p>João coletou minerais de quatro tipos diferentes. Complete o gráfico de setores</p>',
            chart_data: {
              data: [
                {
                  theme: 'theme-dark-orange',
                  label: 'Grafite',
                },
                {
                  theme: 'theme-light-blue',
                  label: 'Pirita',
                },
                {
                  theme: 'theme-turquoise',
                  label: 'Magnetita',
                },
                {
                  theme: 'theme-bordeaux',
                  label: 'Quartzo',
                },
              ],
              name: '',
              labels: ['Mineral', 'Frequência'],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    label: 'Grafite',
                    value: 4,
                  },
                  {
                    label: 'Pirita',
                    value: 2,
                  },
                  {
                    label: 'Magnetita',
                    value: 1,
                  },
                  {
                    label: 'Quartzo',
                    value: 4,
                  },
                ],
              },
              penalty: 0,
            },
            shuffle_options: false,
            ui_style: {
              customClass: '',
              chart_data_position: 'ABOVE',
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Indique quantos minerais ele coletou no total e depois marque no gráfico as fatias que correspondem a cada tipo.</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: [
              '<p>Indique quantos minerais ele coletou no total e depois marque no gráfico as fatias que correspondem a cada tipo.</p>',
            ],
            isEvaluable: true,
          },
          reference: 'deb129a1-7a9e-4b80-86ce-9a4945f20fad',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'laplaces-rule': [
      {
        es: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  'Probabilidad de un suceso = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{n.º de casos favorables}}{\\text{n.º de casos posibles}}\\)" draggable="true">\\(\\frac{\\text{n.º de casos favorables}}{\\text{n.º de casos posibles}}\\)</span>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  'Probabilidad de un suceso = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{n.º de casos no favorables}}{\\text{n.º de casos posibles}}\\)" draggable="true">\\(\\frac{\\text{n.º de casos no favorables}}{\\text{n.º de casos posibles}}\\)</span>',
                value: 1,
                feedback:
                  'Con esta fórmula se calcula la probabilidad de que un suceso no ocurra.',
              },
              {
                label:
                  'Probabilidad de un suceso = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{n.º de casos posibles}}{\\text{n.º de casos favorables}}\\)" draggable="true">\\(\\frac{\\text{n.º de casos posibles}}{\\text{n.º de casos favorables}}\\)</span>',
                value: 2,
                feedback: 'Los valores de la fracción están invertidos.',
              },
            ],
            stimulus:
              '<p>¿Qué fórmula se utiliza para hallar la probabilidad de un suceso?</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 1,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>La fórmula para calcular la probabilidad de un suceso es:</p><p style="text-align: center">Probabilidad = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{n.º de casos favorables}}{\\text{n.º de casos posibles}}\\)" draggable="true">\\(\\frac{\\text{n.º de casos favorables}}{\\text{n.º de casos posibles}}\\)</span></p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: true,
            hints: [
              '<p>La probabilidad se calcula teniendo en cuenta los sucesos posibles y los favorables.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '879797fb-2cf6-4779-94c3-b05df0b706c8',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  'Probability of an event = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{no. of favorable cases}}{\\text{no. of possible cases}}\\)" draggable="true">\\(\\frac{\\text{no. of favorable cases}}{\\text{no. of possible cases}}\\)</span>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  'Probability of an event = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{no. of possible cases}}{\\text{no. of favorable cases}}\\)" draggable="true">\\(\\frac{\\text{no. of possible cases}}{\\text{no. of favorable cases}}\\)</span>',
                value: 1,
                feedback: 'The values of the fraction are inverted.',
              },
              {
                label:
                  'Probability of an event = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{no. of unfavorable cases}}{\\text{no. of possible cases}}\\)" draggable="true">\\(\\frac{\\text{no. of unfavorable cases}}{\\text{no. of possible cases}}\\)</span>',
                value: 2,
                feedback:
                  'This formula calculates the probability that an event does not occur.',
              },
            ],
            stimulus:
              '<p>What formula is used to find the probability of an event?</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 1,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>The formula to calculate the probability of an event is:</p><p style="text-align: center">Probability = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{no. of favorable cases}}{\\text{no. of possible cases}}\\)" draggable="true">\\(\\frac{\\text{no. of favorable cases}}{\\text{no. of possible cases}}\\)</span></p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: true,
            hints: [
              '<p>The probability is calculated taking into account the possible and favorable events.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '5ec2c1eb-f532-4159-af50-4eaa4893f769',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  'Probabilidade de um evento = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{nº de casos favoráveis}}{\\text{nº de casos possíveis}}\\)" draggable="true">\\(\\frac{\\text{nº de casos favoráveis}}{\\text{nº de casos possíveis}}\\)</span>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  'Probabilidade de um evento = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{nº de casos possíveis}}{\\text{nº de casos favoráveis}}\\)" draggable="true">\\(\\frac{\\text{nº de casos possíveis}}{\\text{nº de casos favoráveis}}\\)</span>',
                value: 1,
                feedback: 'Os valores da fração estão invertidos.',
              },
              {
                label:
                  'Probabilidade de um evento = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{nº de casos não favoráveis}}{\\text{nº de casos possíveis}}\\)" draggable="true">\\(\\frac{\\text{nº de casos não favoráveis}}{\\text{nº de casos possíveis}}\\)</span>',
                value: 2,
                feedback:
                  'Com esta fórmula calcula-se a probabilidade de que um evento não aconteça.',
              },
            ],
            stimulus:
              '<p>Qual fórmula é utilizada para encontrar a probabilidade de um evento?</p>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 1,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>A fórmula para calcular a probabilidade de um evento é:</p><p style="text-align: center">Probabilidade = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{\\text{nº de casos favoráveis}}{\\text{nº de casos possíveis}}\\)" draggable="true">\\(\\frac{\\text{nº de casos favoráveis}}{\\text{nº de casos possíveis}}\\)</span></p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: true,
            hints: [
              '<p>A probabilidade é calculada levando em conta os eventos possíveis e os favoráveis.</p>',
            ],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '8038bda1-9644-4384-b7e4-023ba6fecf8f',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
  },
  'algebra-and-functions': {
    'understanding-series-numbers': [
      {
        es: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_7.svg" width="120"></img></div>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_10.svg" width="120"></img></div>',
                value: 1,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_8.svg" width="120"></img></div>',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Selecciona cuál es el siguiente dibujo de esta serie.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_8.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_8.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_7.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_8.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_8.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M2_NyO_52a_9.svg" width="120"></img></div>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: ['<p>Fíjate en los animales.</p>'],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: ['<p>Fíjate en los animales.</p>'],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '7ee74238-767a-4bde-8ee8-fe673639cbfb',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_8.svg" width="120"></img></div>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_10.svg" width="120"></img></div>',
                value: 1,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img></div>',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Select which is the next drawing in this series.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_8.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M2_NyO_52a_9.svg" width="120"></img></div>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: ['<p>Look at the animals.</p>'],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: ['<p>Look at the animals.</p>'],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: 'bbd71fda-68bd-46b4-889f-2cf9df7c2ba7',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'mcq',
          data: {
            type: 'mcq',
            options: [
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_10.svg" width="120"></img></div>',
                value: 0,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img></div>',
                value: 1,
                feedback: '',
              },
              {
                label:
                  '<div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_7.svg" width="120"></img></div>',
                value: 2,
                feedback: '',
              },
            ],
            stimulus:
              '<p>Selecione a próxima figura desta sequência.</p><div style="display:flex; justify-content:center;"><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_10.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M1_NyO_42a_9.svg" width="120"></img><img src="https://blueberry-assets.oneclick.es/M2_NyO_52a_9.svg" width="120"></img></div>',
            shuffle_options: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['0'],
              },
            },
            ui_style: {
              type: 'Multiple choice – standard',
              columns: 3,
              labelType: '',
              customClass: '',
              inlineFeedback: false,
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: ['<p>Observe os animais.</p>'],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            showCheckIcon: false,
            hints: ['<p>Observe os animais.</p>'],
          },
          metadata: {
            name: 'Multiple choice – standard',
          },
          reference: '234e96a2-897d-40b9-9947-51700c4942b1',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'graphing-linear-functions': [
      {
        es: {
          type: 'functions',
          metadata: {
            name: 'Linear function',
          },
          data: {
            type: 'functions',
            stimulus:
              "<p>Dibuja la gráfica de esta proporción lineal:</p><p style='text-align:center;'><i>y</i> = 4<i>x</i></p>",
            grid_size: 400,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [[4, 0]],
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
              theme: 'turquoise',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Dale valores a <i>x</i> y represéntalos. Por ejemplo:</p><p style=\'text-align:center;\'><i>x</i> = 0 → <i>y</i> = 4 · 0 = 0</p><p style=\'text-align:center;\'><i>x</i> = 1 → <i>y</i> = 4 · 1 = 4</p><p style=\'text-align:center;\'><i>x</i> = 2 → <i>y</i> = 4 · 2 = 8</p><table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 50%; vertical-align: middle; text-align: center; background-color: #72D2CD;"><span style="color: rgb(255, 255, 255);"><i>x</i></span></td><td style="width: 50%; vertical-align: middle; text-align: center; background-color: #72D2CD;"><span style="color: rgb(255, 255, 255);"><i>y</i></span></td></tr><tr><td style="width: 50%; vertical-align: middle; text-align: center;">0</td><td style="width: 50%; vertical-align: middle; text-align: center;">0</td></tr><tr><td style="width: 50%; vertical-align: middle; text-align: center;">1</td><td style="width: 50%; text-align: center; vertical-align: middle;">4</td></tr><tr><td style="width: 50%; text-align: center; vertical-align: middle;">2</td><td style="width: 50%; vertical-align: middle; text-align: center;">8</td></tr></tbody></table>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['<p>Dale valores a <i>x</i> y represéntalos.</p>'],
            grid_divisions: 7,
          },
          reference: '8e18b674-87d5-49b8-a925-ff5c3bf90c84',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        en: {
          type: 'functions',
          metadata: {
            name: 'Linear function',
          },
          data: {
            type: 'functions',
            stimulus:
              "<p>Draw the graph of this linear proportion:</p><p style='text-align:center;'><i>y</i> = 4<i>x</i></p>",
            grid_size: 400,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [[4, 0]],
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
              theme: 'turquoise',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Assign values to a <i>x</i> y and represent them. For example:</p><p style=\'text-align:center;\'><i>x</i> = 0 → <i>y</i> = 4 · 0 = 0</p><p style=\'text-align:center;\'><i>x</i> = 1 → <i>y</i> = 4 · 1 = 4</p><p style=\'text-align:center;\'><i>x</i> = 2 → <i>y</i> = 4 · 2 = 8</p><table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 50%; vertical-align: middle; text-align: center; background-color: #72D2CD;"><span style="color: rgb(255, 255, 255);"><i>x</i></span></td><td style="width: 50%; vertical-align: middle; text-align: center; background-color: #72D2CD;"><span style="color: rgb(255, 255, 255);"><i>y</i></span></td></tr><tr><td style="width: 50%; vertical-align: middle; text-align: center;">0</td><td style="width: 50%; vertical-align: middle; text-align: center;">0</td></tr><tr><td style="width: 50%; vertical-align: middle; text-align: center;">1</td><td style="width: 50%; text-align: center; vertical-align: middle;">4</td></tr><tr><td style="width: 50%; text-align: center; vertical-align: middle;">2</td><td style="width: 50%; vertical-align: middle; text-align: center;">8</td></tr></tbody></table>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['<p>Assign values to a <i>x</i> y and plot them.</p>'],
            grid_divisions: 7,
          },
          reference: 'c759db63-5377-46a4-8599-9880a11f4307',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
        pt: {
          type: 'functions',
          metadata: {
            name: 'Linear function',
          },
          data: {
            type: 'functions',
            stimulus:
              "<p>Desenhe o gráfico desta proporção linear:</p><p style='text-align:center;'><i>y</i> = 4<i>x</i></p>",
            grid_size: 400,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [[4, 0]],
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
              theme: 'turquoise',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Dê valores a <i>x</i> y e represente-os. Por exemplo:</p><p style=\'text-align:center;\'><i>x</i> = 0 → <i>y</i> = 4 · 0 = 0</p><p style=\'text-align:center;\'><i>x</i> = 1 → <i>y</i> = 4 · 1 = 4</p><p style=\'text-align:center;\'><i>x</i> = 2 → <i>y</i> = 4 · 2 = 8</p><table style="width: 80%; margin-left: auto; margin-right: auto;"><tbody><tr><td style="width: 50%; vertical-align: middle; text-align: center; background-color: #72D2CD;"><span style="color: rgb(255, 255, 255);"><i>x</i></span></td><td style="width: 50%; vertical-align: middle; text-align: center; background-color: #72D2CD;"><span style="color: rgb(255, 255, 255);"><i>y</i></span></td></tr><tr><td style="width: 50%; vertical-align: middle; text-align: center;">0</td><td style="width: 50%; vertical-align: middle; text-align: center;">0</td></tr><tr><td style="width: 50%; vertical-align: middle; text-align: center;">1</td><td style="width: 50%; text-align: center; vertical-align: middle;">4</td></tr><tr><td style="width: 50%; text-align: center; vertical-align: middle;">2</td><td style="width: 50%; vertical-align: middle; text-align: center;">8</td></tr></tbody></table>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['<p>Dê valores a <i>x</i> y e represente-os.</p>'],
            grid_divisions: 7,
          },
          reference: '86fa0401-1703-4d47-ab40-cad7c9c0cd1b',
          extraValues: {},
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'expanding-notable-identities': [
      {
        es: {
          title: '',
          type: 'clozedropdown',
          metadata: {
            name: 'Cloze with drop down',
          },
          data: {
            possible_responses: [
              ['2', '7', '4'],
              ['4', '4', '10'],
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Selecciona los coeficientes para desarrollar esta igualdad notable.</p>',
            template:
              '<p style="text-align:center;">(2<i>y</i> − <i>x</i>)<sup>2</sup> =</p><p style="text-align:center;">= {{response}}<i>y</i><sup>2</sup> − {{response}}<i>y</i><i>x</i> + <i>x</i><sup>2</sup></p>',
            type: 'clozedropdown',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['4', '4'],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                "<p>Identifica <i>a</i> y <i>b</i> y desarrolla:</p><p style=\"text-align:center;\">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></p><p style=\"text-align:center;\">(<b class='bb-color-8'>2<i>y</i></b> − <b class='bb-color-5'><i>x</i></b>)<sup>2</sup> = (<b class='bb-color-8'>2<i>y</i></b>)<sup>2</sup> − 2 · <b class='bb-color-8'>2<i>y</i></b> · <b class='bb-color-5'><i>x</i></b> + (<b class='bb-color-5'><i>x</i></b>)<sup>2</sup></p><p style=\"text-align:center;\">(2<i>y</i> − <i>x</i>)<sup>2</sup> = 4<i>y</i><sup>2</sup> − 4<i>y</i><i>x</i> + <i>x</i><sup>2</sup></p>",
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasGlobalFeedback: true,
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            hints: [
              '<p>Recuerda que:</p><p style="text-align:center;">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '9b6af3d4-dfc3-4100-b228-c2c98098a66a',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozedropdown',
          metadata: {
            name: 'Cloze with drop down',
          },
          data: {
            possible_responses: [
              ['2', '4', '12'],
              ['20', '4', '4'],
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Select the coefficients to develop this remarkable equality.</p>',
            template:
              '<p style="text-align:center;">(2<i>y</i> − <i>x</i>)<sup>2</sup> =</p><p style="text-align:center;">= {{response}}<i>y</i><sup>2</sup> − {{response}}<i>y</i><i>x</i> + <i>x</i><sup>2</sup></p>',
            type: 'clozedropdown',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['4', '4'],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                "<p>Identify <i>a</i> y <i>b</i> y and expand:</p><p style=\"text-align:center;\">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></p><p style=\"text-align:center;\">(<b class='bb-color-8'>2<i>y</i></b> − <b class='bb-color-5'><i>x</i></b>)<sup>2</sup> = (<b class='bb-color-8'>2<i>y</i></b>)<sup>2</sup> − 2 · <b class='bb-color-8'>2<i>y</i></b> · <b class='bb-color-5'><i>x</i></b> + (<b class='bb-color-5'><i>x</i></b>)<sup>2</sup></p><p style=\"text-align:center;\">(2<i>y</i> − <i>x</i>)<sup>2</sup> = 4<i>y</i><sup>2</sup> − 4<i>y</i><i>x</i> + <i>x</i><sup>2</sup></p>",
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasGlobalFeedback: true,
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            hints: [
              '<p>Remember that:</p><p style="text-align:center;">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'b7aee835-c92c-4644-b922-327c2dd0ad6d',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozedropdown',
          metadata: {
            name: 'Cloze with drop down',
          },
          data: {
            possible_responses: [
              ['13', '36', '6'],
              ['42', '12', '36'],
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Selecione os coeficientes para desenvolver esta identidade notável.</p>',
            template:
              '<p style="text-align:center;">(6<i>y</i> − <i>x</i>)<sup>2</sup> =</p><p style="text-align:center;">= {{response}}<i>y</i><sup>2</sup> − {{response}}<i>y</i><i>x</i> + <i>x</i><sup>2</sup></p>',
            type: 'clozedropdown',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['36', '12'],
              },
            },
            title: '',
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                "<p>Identifica <i>a</i> y <i>b</i> y e desenvolve:</p><p style=\"text-align:center;\">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></p><p style=\"text-align:center;\">(<b class='bb-color-8'>6<i>y</i></b> − <b class='bb-color-5'><i>x</i></b>)<sup>2</sup> = (<b class='bb-color-8'>6<i>y</i></b>)<sup>2</sup> − 2 · <b class='bb-color-8'>6<i>y</i></b> · <b class='bb-color-5'><i>x</i></b> + (<b class='bb-color-5'><i>x</i></b>)<sup>2</sup></p><p style=\"text-align:center;\">(6<i>y</i> − <i>x</i>)<sup>2</sup> = 36<i>y</i><sup>2</sup> − 12<i>y</i><i>x</i> + <i>x</i><sup>2</sup></p>",
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasGlobalFeedback: true,
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
            },
            hints: [
              '<p>Lembre-se que:</p><p style="text-align:center;">(<i>a</i> − <i>b</i>)<sup>2</sup> = <i>a</i><sup>2</sup> − 2<i>ab</i> + <i>b</i><sup>2</sup></p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'cc7cf4c7-e6d8-477f-a806-d9d7a7e5a6d1',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'solutions-quadratic-equation': [
      {
        es: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: [
              '<i>b</i><sup>2</sup> − 4<i>ac</i>',
              'dos',
              'ninguna',
              'una',
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Arrastra para completar la frase. Una de las soluciones no debe usarse.</p>',
            template:
              '<p>El número de soluciones de una ecuación de segundo grado depende de el valor de {{response}}. Si es positivo o 0 tendrá {{response}} soluciones. Si es negativo no tendrá {{response}} solución.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['<i>b</i><sup>2</sup> − 4<i>ac</i>', 'dos', 'ninguna'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                "<p>El número de soluciones de una ecuación de segundo grado depende de el valor de <span class='no-break'><i>b</i><sup>2</sup> − 4<i>ac</i></span> . Si es positivo o 0 tendrá dos soluciones. Si es negativo no tendrá ninguna solución.</p>",
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>Una ecuación de segundo grado no puede tener una única solución.</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'a6bf590b-d289-48fb-ab79-309880ae3a77',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: [
              '<i>b</i><sup>2</sup> − 4<i>ac</i>',
              'dos',
              'ninguna',
              'una',
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Drag to complete the sentence. One of the solutions should not be used.</p>',
            template:
              '<p>The number of solutions for a second degree equation depends on the value of {{response}}. If it is positive o 0, it will have {{response}} solutions. If it is negative, it will not have {{response}} solution.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['<i>b</i><sup>2</sup> − 4<i>ac</i>', 'dos', 'ninguna'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                "<p>The number of solutions for a quadratic equation depends on the value of <span class='no-break'><i>b</i><sup>2</sup> − 4<i>ac</i></span>. If it is positive o 0, it will have two solutions. If it is negative, it will have no solutions.</p>",
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>A second-degree equation cannot have a single solution.</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'b7bcb456-d920-4187-9190-6fd529650675',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeassociation',
          metadata: {
            name: 'Cloze with drag & drop',
          },
          data: {
            possible_responses: [
              '<i>b</i><sup>2</sup> − 4<i>ac</i>',
              'dos',
              'ninguna',
              'una',
            ],
            response_container: {
              pointer: 'left',
            },
            stimulus:
              '<p>Arraste para completar a frase. Uma das soluções não deve ser usada.</p>',
            template:
              '<p>O número de soluções de uma equação de segundo grau depende do valor de {{response}}. Se for positivo o 0 terá {{response}} soluções. Se for negativo não terá {{response}} solução.</p>',
            type: 'clozeassociation',
            case_sensitive: true,
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: ['<i>b</i><sup>2</sup> − 4<i>ac</i>', 'dos', 'ninguna'],
              },
            },
            duplicate_responses: false,
            shuffle_options: true,
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                "<p>O número de soluções de uma equação de segundo grau depende do valor de <span class='no-break'><i>b</i><sup>2</sup> − 4<i>ac</i></span> . Se for positivo o 0 terá duas soluções. Se for negativo não terá nenhuma solução.</p>",
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            ui_style: {
              type: '',
              customClass: '',
              automatic_drop: true,
            },
            hints: [
              '<p>Uma equação de segundo grau não pode ter uma única solução.</p>',
            ],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: 'ca1f547b-3365-4de8-ad74-feb4b3f96adf',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    'systems-of-equations': [
      {
        es: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Resuelve el siguiente sistema de ecuaciones usando el método de adicción.</p><p style="text-align:center;"><p style="text-align:center;"><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\begin{array}{ll} 14x + 7y = −35   \\\\ 21x − 7y = −70 \\end{array}\\Bigg\\}\\)" draggable="true" style="opacity: 1;">\\(\\begin{array}{ll}14x + 7y = −35   \\\\  21x − 7y = −70\\end{array}\\Bigg\\}  \\)</span></p>',
            template:
              '<p style="text-align:center;"><i>x</i> = {{response}}</p><p style="text-align:center;"><i>y</i> = {{response}}</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '-3',
                  },
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '1',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Suma ambas ecuaciones:</p><div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 150px;max-height: 174px;position: relative;width: 100%;display: inline-block;">\n\t<img src="https://blueberry-assets.oneclick.es/M8_NyO_69a_E_0.svg" alt="" tabindex="0"></img>\n\t<div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;">\n\t\t<div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;">\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 25.1849%; top: 15.1850%;">14<i>x</i> + 7<i>y</i> = −35</span>\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 25.2422%; top: 48.6575%;">21<i>x</i> − 7<i>y</i> = −70</span>\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 44.4167%; top: 77.5458%;">35<i>x</i> = −105</span>\n\t\t</div>\n\t</div>\n</div></div></div> <p>Despeja <i>x</i>:</p><p style="text-align:center;"><i>x</i> = −3</p><p>Después sustituye <i>x</i> y despeja <i>y</i> en una ecuación:</p><p style="text-align:center;">21 · (−3)  − 7<i>y</i> = −70</p><p style="text-align:center;"><i>y</i> = 1</p>',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'INTERMEDIATE',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: ['<p>Suma ambas ecuaciones y despeja <i>x.</i></p>'],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '58cf2660-cca3-4f5b-ad1b-fe08d4c40781',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Solve the following system of equations using the addition method.</p><p style="text-align:center;"><p style="text-align:center;"><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\begin{array}{ll} 50x + 10y = 160   \\\\ 20x − 10y = 50 \\end{array}\\Bigg\\}\\)" draggable="true" style="opacity: 1;">\\(\\begin{array}{ll}50x + 10y = 160   \\\\  20x − 10y = 50\\end{array}\\Bigg\\}  \\)</span></p>',
            template:
              '<p style="text-align:center;"><i>x</i> = {{response}}</p><p style="text-align:center;"><i>y</i> = {{response}}</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '3',
                  },
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '1',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Add both equations:</p><div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 150px;max-height: 174px;position: relative;width: 100%;display: inline-block;">\n\t<img src="https://blueberry-assets.oneclick.es/M8_NyO_69a_E_0.svg" alt="" tabindex="0"></img>\n\t<div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;">\n\t\t<div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;">\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 25.1849%; top: 15.1850%;">50<i>x</i> + 10<i>y</i> = 160</span>\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 25.2422%; top: 48.6575%;">20<i>x</i> − 10<i>y</i> = 50</span>\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 44.4167%; top: 77.5458%;">70<i>x</i> = 210</span>\n\t\t</div>\n\t</div>\n</div></div></div> <p>Solve for <i>x</i>:</p><p style="text-align:center;"><i>x</i> = 3</p><p>Then substitute <i>x</i> and solve for <i>y</i> in one equation:</p><p style="text-align:center;">20 · 3  − 10<i>y</i> = 50</p><p style="text-align:center;"><i>y</i> =',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'INTERMEDIATE',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: ['<p>Add both equations y and isolate <i>x.</i></p>'],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '50efdb18-51f0-403f-b8ad-c2e351d68171',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'clozeformula',
          metadata: {
            name: 'Cloze math',
          },
          data: {
            type: 'clozeformula',
            stimulus:
              '<p>Resolva o seguinte sistema de equações usando o método de adição.</p><p style="text-align:center;"><p style="text-align:center;"><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\begin{array}{ll} 27x + 9y = 18   \\\\ 45x − 9y = 126 \\end{array}\\Bigg\\}\\)" draggable="true" style="opacity: 1;">\\(\\begin{array}{ll}27x + 9y = 18   \\\\  45x − 9y = 126\\end{array}\\Bigg\\}  \\)</span></p>',
            template:
              '<p style="text-align:center;"><i>x</i> = {{response}}</p><p style="text-align:center;"><i>y</i> = {{response}}</p>',
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: [
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '2',
                  },
                  {
                    method: 'equivLiteral',
                    options: {
                      decimalPlaces: 3,
                    },
                    feedback: '',
                    value: '-4',
                  },
                ],
              },
            },
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Soma ambas as equações:</p><div style="display:flex; justify-content:center;"><div class="lemo-fixed-to-responsive" style="max-width: 150px;max-height: 174px;position: relative;width: 100%;display: inline-block;">\n\t<img src="https://blueberry-assets.oneclick.es/M8_NyO_69a_E_0.svg" alt="" tabindex="0"></img>\n\t<div class="lemo-graphie-container" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;">\n\t\t<div class="lemo-graphie" style="position: relative; width: 100%; height: 100%;">\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 25.1849%; top: 15.1850%;">27<i>x</i> + 9<i>y</i> = 18</span>\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 25.2422%; top: 48.6575%;">45<i>x</i> − 9<i>y</i> = 126</span>\n\t\t\t<span class="lemo-graphie-label" style="position: absolute; left: 44.4167%; top: 77.5458%;">72<i>x</i> = 144</span>\n\t\t</div>\n\t</div>\n</div></div></div> <p>Isola <i>x</i>:</p><p style="text-align:center;"><i>x</i> = 2</p><p>Depois substitui <i>x</i> e isola <i>y</i> numa equação:</p><p style="text-align:center;">45 · 2  − 9<i>y</i> = 126</p><p style="text-align:center;"><i>y__',
              ],
              responseMessages: [],
              withFeedbackPanel: true,
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            isEvaluable: true,
            attempts: {
              attempts: 0,
            },
            ui_style: {
              type: '',
              customClass: '',
              keyboard: {
                type: 'INTERMEDIATE',
                isFloating: false,
              },
            },
            responses: [
              {
                feedback: '',
              },
            ],
            hints: ['<p>Soma ambas as equações y e isola <i>x.</i></p>'],
            feedback_responses: [
              {
                feedback: '',
              },
              {
                feedback: '',
              },
            ],
          },
          reference: '26a2efc4-e021-4c0f-8fd6-304853d7b223',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
    flowcharts: [
      {
        es: {
          title: '',
          type: 'flowchart',
          metadata: {
            name: 'Flowchart',
          },
          data: {
            type: 'flowchart',
            stimulus:
              '<p>¿Cuál sería el proceso para calcular el número de bolitas en la posición <i>n</i> de esta secuencia?</p><div style="display:flex; justify-content:center;"><table style="width: 80%; background: none !important;"><tbody><tr><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src=" https://blueberry-assets.oneclick.es/M8_NyO_60a_5.svg" width="150"></img></div></td><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src="https://blueberry-assets.oneclick.es/M8_NyO_60a_6.svg" width="150"></img></div></td><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src="https://blueberry-assets.oneclick.es/M8_NyO_60a_7.svg" width="150"></img></div></td></tr></tbody></table>',
            chart: {
              config: {
                chart: 'flowchart',
                direction: 'TB',
              },
              nodes: [
                {
                  id: 'n1',
                  label: 'Inicio',
                  type: 'start',
                  static: true,
                },
                {
                  id: 'n2',
                  label:
                    'Deducir el patrón: cada posición aumenta tres bolitas y empieza con 5 bolitas.',
                  type: 'process',
                },
                {
                  id: 'n3',
                  label:
                    '<p>Deducir la expresión del término general:<i>a</i><sub>n</sub> = 3<i>n</i> + 2</p>',
                  type: 'process',
                },
                {
                  id: 'n4',
                  label:
                    '<p>Escribir el término <i>a</i><sub>n</sub> sustituyendo el valor de <i>n</i></p>',
                  type: 'process',
                },
                {
                  id: 'n5',
                  label: 'Fin',
                  type: 'end',
                  static: true,
                },
              ],
              edges: [
                {
                  source: 'n1',
                  target: 'n2',
                },
                {
                  source: 'n2',
                  target: 'n3',
                },
                {
                  source: 'n3',
                  target: 'n4',
                },
                {
                  source: 'n4',
                  target: 'n5',
                },
              ],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: '',
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Una vez deducido que en la primera posición hay 5 bolitas, en la segunda, 8, en la tercera, 11, se puede deducir el término general y calcular cualquier <i>a</i><sub>n</sub>:</p><p style="text-align: center"><i>a</i><sub>n</sub> = 3<i>n</i> + 2</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['<p>Comienza deduciendo el patrón.</p>'],
          },
          extraValues: {},
          reference: '9f92c2a4-a253-4f31-ad92-13724dd12a44',
          lemonadeVersion: '3.33.2',
        },
        en: {
          title: '',
          type: 'flowchart',
          metadata: {
            name: 'Flowchart',
          },
          data: {
            type: 'flowchart',
            stimulus:
              '<p>What would be the process to calculate the number of balls in the position <i>n</i> of this sequence?</p><div style="display:flex; justify-content:center;"><table style="width: 80%; background: none !important;"><tbody><tr><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src=" https://blueberry-assets.oneclick.es/M8_NyO_60a_5.svg" width="150"></img></div></td><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src="https://blueberry-assets.oneclick.es/M8_NyO_60a_6.svg" width="150"></img></div></td><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src="https://blueberry-assets.oneclick.es/M8_NyO_60a_7.svg" width="150"></img></div></td></tr></tbody></table>',
            chart: {
              config: {
                chart: 'flowchart',
                direction: 'TB',
              },
              nodes: [
                {
                  id: 'n1',
                  label: 'Start',
                  type: 'start',
                  static: true,
                },
                {
                  id: 'n2',
                  label:
                    'Deduce the pattern: each position increases by three balls y starts with 5 balls.',
                  type: 'process',
                },
                {
                  id: 'n3',
                  label:
                    '<p>Deduce the expression of the general term: <i>a</i><sub>n</sub> = 3<i>n</i> + 2</p>',
                  type: 'process',
                },
                {
                  id: 'n4',
                  label:
                    '<p>Write the term <i>a</i><sub>n</sub> substituting the value of <i>n</i></p>',
                  type: 'process',
                },
                {
                  id: 'n5',
                  label: 'End',
                  type: 'end',
                  static: true,
                },
              ],
              edges: [
                {
                  source: 'n1',
                  target: 'n2',
                },
                {
                  source: 'n2',
                  target: 'n3',
                },
                {
                  source: 'n3',
                  target: 'n4',
                },
                {
                  source: 'n4',
                  target: 'n5',
                },
              ],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: '',
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Once it has been deduced that there are 5 marbles in the first position, 8 in the second, 11 in the third, the general term y can be deduced to calculate any <i>a</i><sub>n</sub>:</p><p style="text-align: center"><i>a</i><sub>n</sub> = 3<i>n</i> + 2</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['<p>Start by deducing the pattern.</p>'],
          },
          extraValues: {},
          reference: '74868509-7344-442a-ba6b-771baa8507a8',
          lemonadeVersion: '3.33.2',
        },
        pt: {
          title: '',
          type: 'flowchart',
          metadata: {
            name: 'Flowchart',
          },
          data: {
            type: 'flowchart',
            stimulus:
              '<p>Qual seria o processo para calcular o número de bolinhas na posição <i>n</i> desta sequência?</p><div style="display:flex; justify-content:center;"><table style="width: 80%; background: none !important;"><tbody><tr><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src=" https://blueberry-assets.oneclick.es/M8_NyO_60a_5.svg" width="150"></img></div></td><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src="https://blueberry-assets.oneclick.es/M8_NyO_60a_6.svg" width="150"></img></div></td><td style="width: 20%; text-align: left; border: none; background: none !important;"><div style="display:flex; justify-content:left; padding:20px"><img src="https://blueberry-assets.oneclick.es/M8_NyO_60a_7.svg" width="150"></img></div></td></tr></tbody></table>',
            chart: {
              config: {
                chart: 'flowchart',
                direction: 'TB',
              },
              nodes: [
                {
                  id: 'n1',
                  label: 'Início',
                  type: 'start',
                  static: true,
                },
                {
                  id: 'n2',
                  label:
                    'Deduzir o padrão: cada posição aumenta três bolinhas y começa com 5 bolinhas.',
                  type: 'process',
                },
                {
                  id: 'n3',
                  label:
                    '<p>Deduzir a expressão do termo geral:<i>a</i><sub>n</sub> = 3<i>n</i> + 2</p>',
                  type: 'process',
                },
                {
                  id: 'n4',
                  label:
                    '<p>Escrever o termo <i>a</i><sub>n</sub> substituindo o valor de <i>n</i></p>',
                  type: 'process',
                },
                {
                  id: 'n5',
                  label: 'Fim',
                  type: 'end',
                  static: true,
                },
              ],
              edges: [
                {
                  source: 'n1',
                  target: 'n2',
                },
                {
                  source: 'n2',
                  target: 'n3',
                },
                {
                  source: 'n3',
                  target: 'n4',
                },
                {
                  source: 'n4',
                  target: 'n5',
                },
              ],
            },
            validation: {
              scoring_type: 'exactMatch',
              immediateFeedback: false,
              alt_responses: [],
              valid_response: {
                score: 1,
                value: '',
              },
              penalty: 0,
            },
            ui_style: {
              customClass: '',
            },
            isEvaluable: true,
            feedback: {
              successMessage: '',
              errorMessages: [
                '<p>Uma vez deduzido que na primeira posição há 5 bolinhas, na segunda, 8, na terceira, 11, pode-se deduzir o termo geral y calcular qualquer <i>a</i><sub>n</sub>:</p><p style="text-align: center"><i>a</i><sub>n</sub> = 3<i>n</i> + 2</p>',
              ],
              responseMessages: [],
              config: {
                visibility: true,
                sequence: 'stack',
                hasSpecificFeedback: true,
              },
            },
            hints: ['<p>Comece deduzindo o padrão.</p>'],
          },
          extraValues: {},
          reference: 'b9d3758a-665c-482b-9224-0780a64a6d2b',
          lemonadeVersion: '3.33.2',
        },
      },
    ],
  },
};
