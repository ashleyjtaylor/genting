import React from 'react';

import TextLabel from '../UI/TextLabel/TextLabel';

import * as S from './PlanetInfoStyles';

const PlanetInfo = ({ Name, Climate, Population }) => {
  return (
    <S.PlanetInfo>
      <S.Name>{Name}</S.Name>
      <S.Info>
        <TextLabel label="Climate" text={Climate} />
      </S.Info>
      <S.Info>
        <TextLabel label="Population" text={Population} />
      </S.Info>
    </S.PlanetInfo>
  );
};

export default PlanetInfo;
