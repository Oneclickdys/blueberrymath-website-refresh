import React from 'react';

interface QuestionProps {
  data?: any;
  fileApi?: string;
}

const Question: React.FC<QuestionProps> = () => {
  return (
    <div className="p-4 border rounded">
      <p>Question component placeholder - waiting for lemonade editor integration</p>
    </div>
  );
};

export default Question;