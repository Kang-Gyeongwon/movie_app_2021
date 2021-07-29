import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ContentText, ContentTitle, MovieContent, Genres, Genre, Poster } from '../custom-styled';

const Movie = ({ title, year, summary, poster, genres }) => {
  return <MovieContent>
    <Link to={{
      pathname: "/movie-detail",
      state: { year, title, summary, poster, genres }
    }} style={{ textDecoration: "none", color: "black" }}
    >
      <Poster src={poster} alt={title} title={title} />
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{year}</ContentText>
      <Genres>
        {genres.map((genre, idx) => {
          return <Genre key={idx}>
            <ContentText style={{ fontSize: 7 }}>{genre}</ContentText>
          </Genre>
        })}
        <ContentText>{summary.slice(0, 180)} ...</ContentText>
      </Genres>
    </Link>
  </MovieContent>
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;