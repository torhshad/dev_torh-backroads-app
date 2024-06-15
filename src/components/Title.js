import React from 'react';

const Title = (titles) => {
  const { title, subTitle } = titles;
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
