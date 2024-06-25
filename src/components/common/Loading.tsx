import React from 'react';
import { BeatLoader } from 'react-spinners';

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="#FB1C49" />
    </div>
  );
}

export default Loading;
