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
        es: {},
        en: {},
        pt: {},
      },
    ],
    'graphically-representing-fractions': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'prime-factorization': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'equivalence-between-powers-roots': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
  },
  geometry: {
    'measuring-angles-protractor': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'spatial-orientation': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'spatial-position': [
      {
        es: {},
        en: {},
        pt: {},
      },
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'identify-types-angles': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'classification-polygons': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'elements-polyhedron': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'introduction-cartesian-plane': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'cartesian-plane': [
      {
        es: {},
        en: {},
        pt: {},
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
        es: {},
        en: {},
        pt: {},
      },
    ],
  },
  'magnitudes-and-measurements': {
    'analog-clocks': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'digital-clocks': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'days-week-and-months': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'ordering-routines': [
      {
        es: {},
        en: {},
        pt: {},
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
        es: {},
        en: {},
        pt: {},
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
        es: {},
        en: {},
        pt: {},
      },
    ],
    'interpreting-bar-graphs': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'bar-charts': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'single-double-bar-charts': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    histograms: [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'frequency-curves': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'pie-charts': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'laplaces-rule': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
  },
  'algebra-and-functions': {
    'understanding-series-numbers': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'graphing-linear-functions': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'expanding-notable-identities': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'solutions-quadratic-equation': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    'systems-of-equations': [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
    flowcharts: [
      {
        es: {},
        en: {},
        pt: {},
      },
    ],
  },
};
