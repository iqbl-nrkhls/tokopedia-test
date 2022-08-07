import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ANIMES } from '../../models/anime';

type AnimeType = {
  id: string;
  title: {
    romaji: string;
  };
  coverImage: {
    medium: string;
    large: string;
  }
}

export function ShowAnimes() {
  const { loading, error, data } = useQuery(GET_ANIMES, {
    variables: {
      page: 1,
      perPage: 10,
    }
  });

  if (loading)
    return <p>Loading...</p>;
  if (error)
    return <p>Error :(</p>;

  return data.Page.media.map((anime: AnimeType) => (
    <div key={anime.id}>
      <Link to={`/anime/${anime.id}`}>
        <h3>{anime.title.romaji}</h3>
        <img width="400" height="250" alt="location-reference" src={`${anime.coverImage.medium}`} />
      </Link >
    </div>
  ));
}
