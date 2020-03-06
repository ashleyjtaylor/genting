import React from 'react';

import * as S from './ButtonLinkStyles';

const ButtonLink = ({ text, url }) => {
  return (
    <S.Link href={url}>
      {text}
    </S.Link>
  );
};

export default ButtonLink;
