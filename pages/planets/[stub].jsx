import React from 'react';
import fetch from 'isomorphic-unfetch';

import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import FilmsList from '../../components/FilmsList/FilmsList';

import ButtonLink from '../../components/UI/ButtonLink/ButtonLink';

import * as GS from '../globalStyles';

const PlanetPage = ({ data }) => {
  const { Films, ...props } = data;

  return (
    <GS.Main>
      <GS.Wrap>
        <GS.BackButtonWrap>
          <ButtonLink url="/" text="Back" />
        </GS.BackButtonWrap>

        <PlanetInfo {...props } />
        <FilmsList films={Films} />
      </GS.Wrap>
    </GS.Main>
  );
}

PlanetPage.getInitialProps = async ({ res, query }) => {
  try {
    const response = await fetch(`http://localhost:3000/api/planets/${query.stub}`);
    const data = await response.json();

    if (Object.entries(data).length === 0) {
      if (res) res.statusCode = 404;
      return { statusCode: 404 };
    }

    if (res) res.statusCode = 200;

    return { data };
  } catch (err) {
    if (res) res.statusCode = 500;

    return {
      err,
      statusCode: 500,
      message: 'Server error'
    }
  }
};

export default PlanetPage;
