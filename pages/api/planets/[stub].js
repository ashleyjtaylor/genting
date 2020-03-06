import moment from 'moment';
import fetch from 'isomorphic-unfetch';
import { formatStub, formatFilm } from '../../../lib/responseFormat';

const stubs = [
  { id: 1, planet: 'tatooine' },
  { id: 2, planet: 'alderaan' },
  { id: 3, planet: 'yavin' }
];

const fetchFilms = async (films) => {
  const data = await Promise.all(
    films.map(async url => {
      const response = await fetch(url);
      const film = await response.json();

      return formatFilm(film);
    })
  );

  return data.sort((a, b) => moment(b.ReleaseDate).diff(a.ReleaseDate, 'days'));
};

export default async (req, res) => {
  const stub = stubs.find(stub => stub.planet === req.query.stub);

  if (!stub) {
    return res.status(404).json({});
  }

  try {
    const response = await fetch(`https://swapi.co/api/planets/${stub.id}`);
    const data = await response.json();
  
    data.films = await fetchFilms(data.films);

    return res.status(200).json(formatStub(data));
  } catch (err) {
    console.log('Error: /planets/:stub', err);
    return res.status(400).json({ message: 'Error fetching planets', err });
  }
};
