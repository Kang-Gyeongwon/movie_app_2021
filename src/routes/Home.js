import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { Container, Loder, LoderText, Movies } from '../custom-styled';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      movies: []
    }
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("http://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state
    return <Container>
      {isLoading ? <Loder>
        <LoderText>"Loding..."</LoderText>
      </Loder> : <Movies>
        {movies.map((movie, idx) => {
          return <Movie key={idx}
            id={movie.id} year={movie.year} title={movie.title}
            summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}
          />
        })}
      </Movies>
      }
    </Container>
  }
}

export default Home;