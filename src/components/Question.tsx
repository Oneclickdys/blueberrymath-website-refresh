/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useEffect } from 'react';
import {
  Lemonade,
  observer,
  useLemonadeQuestion,
  setConfig,
} from '@oneclick/react-lemonade-editor';

interface QuestionProps {
  data: any;
  fileApi?: string;
}

declare global {
  interface Window {
    lemonadeApi: any;
  }
}

function Question({ data = {}, fileApi }: Readonly<QuestionProps>) {
  const {
    exercise: { Controls, Question, Feedback, questionApi, SampleAnswer },
    updateExercise,
  } = useLemonadeQuestion({ data, assetsQuestionApi: fileApi });

  useEffect(() => {
    setConfig({
      mathRenderEngine: 'katex',
    });
  }, []);

  useEffect(() => {
    window.lemonadeApi = questionApi;
    questionApi.showAutoFeedback('none');
  }, [questionApi]);

  useEffect(() => {
    console.log('updateExercise');
    updateExercise({ data });
    questionApi.showAutoFeedback('none');
  }, [data]);

  const handleChange = useCallback(
    (output: any) => console.log('changed: ', output.store.getUserResponse()),
    []
  );

  const onImmediateSuccess = useCallback(
    (item: any) => console.log('onImmediateSuccess: ', item),
    []
  );
  const onImmediateError = useCallback(
    (item: any) => console.log('onImmediateError: ', item),
    []
  );
  const onComplete = useCallback(() => console.log('complete!'), []);
  const handleValidate = useCallback((data: any) => console.log(data), []);
  const handleSend = useCallback((data: any) => {
    console.log('ON SEND CALLBACK');
    console.log(data);
  }, []);
  const handleOnBeforeSend = async (next: () => void) => {
    console.log('handleOnBeforeSend');
    questionApi.setAssetsQuestionApi(fileApi + '?handleOnBeforeSend=1');
    next();
  };
  const handleChangeStatus = useCallback((data: any) => {
    console.log('handleChangeStatus');
    console.log(data);
  }, []);
  const handleUploadComplete = useCallback((data: any) => {
    console.log('handleComplete');
    console.log(data);
  }, []);
  const handleUploadError = useCallback((data: any) => {
    console.log('handleComplete Error');
    console.log(data);
  }, []);

  return (
    <Lemonade className="lemonade-exercises-question">
      <Controls
        showPoints={false}
        showCheckAnswer
        showReset
        showSolution
        onValidate={handleValidate}
        onSend={handleSend}
        onBeforeSend={handleOnBeforeSend}
      >
        <Question
          changed={handleChange}
          onImmediateSuccess={onImmediateSuccess}
          onImmediateError={onImmediateError}
          onComplete={onComplete}
          onChangeStatus={handleChangeStatus}
          onUploadComplete={handleUploadComplete}
          onUploadError={handleUploadError}
          immediateFeedback={false}
          context={'NONE'}
          autoFocus={'enabled'}
        />
        <SampleAnswer />
        <Feedback />
      </Controls>
    </Lemonade>
  );
}

export default observer(Question);
