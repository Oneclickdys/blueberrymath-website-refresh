declare module '@oneclick/react-lemonade-editor' {
  import { FC } from 'react';

  export const Lemonade: FC<{ className?: string; children: React.ReactNode }>;
  export const observer: (component: FC) => FC;
  export const useLemonadeQuestion: (options: { data?: any; assetsQuestionApi?: string }) => {
    exercise: {
      Controls: FC<any>;
      Question: FC<any>;
      Feedback: FC<any>;
      questionApi: any;
      SampleAnswer: FC<any>;
    };
    updateExercise: (options: { data: any }) => void;
  };
  export const setConfig: (config: { mathRenderEngine?: string }) => void;
}

declare module '@oneclick/react-lemonade-editor/dist/index.css'