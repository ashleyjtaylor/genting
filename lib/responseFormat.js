export const formatStub = (data) => {
  const { name, climate, films, population } = data;

  return {
    Name: name,
    Climate: climate,
    Population: population,
    Films: films
  }
};

export const formatFilm = (data) => {
  const { title, director, release_date } = data;

  return {
    Title: title,
    Director: director,
    ReleaseDate: release_date,
  }
};
