import React from 'react';

import * as S from './TextLabelStyles';

const TextLabel = ({ label, text }) => {
  return (
    <S.Container>
      <h5>{label}</h5>
      <span>{text}</span>
    </S.Container>
  );
};

export default TextLabel;
