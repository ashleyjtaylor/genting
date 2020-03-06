import React from 'react';

import ButtonLink from '../UI/ButtonLink/ButtonLink';

import * as GS from '../../pages/globalStyles';
import * as S from './ErrorStyles';

const Error = ({ statusCode }) => {
  let message;
  let caption;

  switch (statusCode) {
    case 404:
      message = 'Not found';
      caption = 'This page could not be found';
      break;
    case 500:
      message = 'Server error';
      caption = 'Something went wrong';
      break;
    default:
      statusCode = 500;
      message = 'Server error';
      caption = 'Something went wrong';
  }

  return (
    <GS.Main>
      <GS.Wrap>
        <S.Container>
          <h1>{statusCode} {message}</h1>
          <h4>{caption}</h4>
          <ButtonLink url="/" text="Go to Homepage" />
        </S.Container>
      </GS.Wrap>
    </GS.Main>
  );
};

export default Error;
