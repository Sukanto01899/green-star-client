import React from 'react';

const Progress = ({skill, score}) => {
    return (
        <div>
  <span id="ProgressLabel" className="sr-only">Loading</span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="75"
    className="block rounded-full bg-gray-200"
  >
    <span style={{width: `${score}`}}
      className="block h-5 rounded-full bg-universal text-center text-[10px]/4"
    >
      <span className="rounded-sm bg-white px-0.5 font-bold text-universal">
        {skill}-{score}
      </span>
    </span>
  </span>
</div>
    );
};

export default Progress;