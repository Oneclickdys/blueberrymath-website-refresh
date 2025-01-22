export default {
  'numbers-and-operations': [
    {
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
    {
      title: '',
      type: 'mcq',
      data: {
        type: 'mcq',
        options: [
          {
            label: '285 espectadores',
            value: 0,
            feedback: '',
          },
          {
            label: '315 espectadores',
            value: 1,
            feedback: '',
          },
          {
            label: '270 espectadores',
            value: 2,
            feedback: '',
          },
        ],
        stimulus:
          '<p>Al estreno de una obra de teatro asistieron 375 personas. Si la semana siguiente hubo un dencenso del público de un <span class="no-break">24 %,</span> ¿cuántos espectadores fueron? Selecciona la opción correcta.</p>',
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
            '<p>Para obtener el resultado, primero calcula el porcentaje:</p><p style="text-align:center;">24 % de 375 = 375 · <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{24}{{{100}}}\\)" draggable="true">\\(\\frac{24}{{{100}}}\\)</span> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{375\\ ·\\ 24}{100}\\)" draggable="true">\\(\\frac{375\\ ·\\ 24}{100}\\)</span> = 90</p><p>Después réstaselo a 375:</p><p style="text-align:center;">375 − 90 = 285</p>',
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
          '<p>Para obtener el resultado, primero calcula el porcentaje:</p><p style="text-align:center;">24 % de 375 = 375 · <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{24}{{{100}}}\\)" draggable="true">\\(\\frac{24}{{{100}}}\\)</span> = <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{375\\ ·\\ 24}{100}\\)" draggable="true">\\(\\frac{375\\ ·\\ 24}{100}\\)</span> = 90</p>',
        ],
      },
      metadata: {
        name: 'Multiple choice – standard',
      },
      reference: '9af85e16-4849-4969-a8d5-d185fc364bdc',
    },
    {
      title: '',
      type: 'clozeformula',
      metadata: {
        name: 'Cloze math',
      },
      data: {
        type: 'clozeformula',
        stimulus:
          '<p>Escribe el valor de la siguiente expresión cuando <i>k</i> = 0 y <i>n</i> = 2.</p>',
        template:
          '<p style="text-align: center"><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{5k\\ -\\ 4}{n}\\)" draggable="true">\\(\\frac{5k\\ -\\ 4}{n}\\)</span> = {{response}}</p>',
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
                value: '-2',
              },
            ],
          },
        },
        feedback: {
          successMessage: '',
          errorMessages: [
            '<p>Para calcular la expresión hay que sustituir los valores de <i>k</i> y <i>n:</i><p style="text-align: center"><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{5k\\ -\\ 4}{n}\\)" draggable="true">\\(\\frac{5k\\ -\\ 4}{n}\\)</span> =</p><p style="text-align: center">= <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{5\\ · \\ 0\\ -\\ 4}{2}\\)" draggable="true">\\(\\frac{5 \\ · \\ 0\\ -\\ 4}{2}\\)</span> =</p><p style="text-align: center">= <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{−4}{2}\\)" draggable="true">\\(\\frac{−4}{2}\\)</span> = −2</p>',
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
          '<p>Sustituye en la expresión los valores de <i>k</i> y <i>n:</i></p><p style="text-align: center"><span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{5k\\ -\\ 4}{n}\\)" draggable="true">\\(\\frac{5k\\ -\\ 4}{n}\\)</span> =</p><p style="text-align: center">= <span class="fr-math-v2 fr-draggable" contenteditable="false" data-original-math="\\(\\frac{5\\ · \\ 0\\ -\\ 4}{2}\\)" draggable="true">\\(\\frac{5 \\ · \\ 0\\ -\\ 4}{2}\\)</span> = …</p>',
        ],
        feedback_responses: [
          {
            feedback: '',
          },
        ],
      },
      reference: '03d5549f-c6aa-4eeb-aa70-b300a9bb8ffa',
    },
    {
      title: '',
      type: 'clozeformula',
      metadata: {
        name: 'Cloze math',
      },
      data: {
        type: 'clozeformula',
        stimulus:
          '<p>Escribe el valor de la siguiente expresión cuando <i>b</i> = 3 y <i>x</i> = 4.</p>',
        template:
          '<p style="text-align: center">9(<i>b</i> − <i>x</i>) − 8 = {{response}}</p>',
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
                value: '-17',
              },
            ],
          },
        },
        feedback: {
          successMessage: '',
          errorMessages: [
            '<p>Para calcular expresión hay que sustituir los valores de <i>b</i> y <i>x:</i></p><p style="text-align: center">9(<i>b</i> − <i>x</i>) − 8 =</p><p style="text-align: center">= 9 · (3 − 4) − 8 =</p><p style="text-align: center">= 9 · (−1) − 8 = −17</p>',
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
          '<p>Sustituye en la expresión los valores de <i>b</i> y <i>x:</i></p><p style="text-align: center">9(<i>b</i> − <i>x</i>) − 8 =</p><p style="text-align: center">= 9 · (3 − 4) − 8 = …</p>',
        ],
        feedback_responses: [
          {
            feedback: '',
          },
        ],
      },
      reference: '790c8137-e770-46eb-85a3-82ae2adbe0db',
    },
  ],
};
