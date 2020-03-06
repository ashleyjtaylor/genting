import React from 'react';
import Link from 'next/link';

import * as S from './PlanetCardStyles';

const PlanetCard = ({ name, image, slug }) => {
  return (
    <S.PlanetCard>
      <Link href="/planets/[stub]" as={`/planets/${slug}`} passHref>
        <a>
          <S.ImageWrap>
            <img src={`/${image}`} alt={`${name} landscape`} />
          </S.ImageWrap>
          <S.Name>{name}</S.Name>
        </a>
      </Link>
    </S.PlanetCard>
  );
};

export default PlanetCard;
