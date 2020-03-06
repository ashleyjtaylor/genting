import React from 'react';
import moment from 'moment';

import * as S from './FilmsListStyles';

const FilmsList = ({ films }) => {
  return (
    <S.Container>
      <h3>Films</h3>

      <S.Table>
        <S.Headings>
          <S.Heading>Title</S.Heading>
          <S.Heading>Director</S.Heading>
        </S.Headings>
        
        <>
          {films.map(film => (
            <S.Film key={film.Title}>
              <S.FilmTitle>
                <span>{film.Title}</span>
                <time dateTime={film.ReleaseDate}>{moment(film.ReleaseDate).format('DD MMM YYYY')}</time>
                <S.FilmDirector>{film.Director}</S.FilmDirector>
              </S.FilmTitle>
              <S.FilmDirector>{film.Director}</S.FilmDirector>
            </S.Film>
          ))}
        </>
      </S.Table>
    </S.Container>
  );
};

export default FilmsList;
