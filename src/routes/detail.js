import React from 'react';
import { MovieContent, Poster, ContentTitle, ContentText, Genres, Genre } from '../custom-styled';


class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push("/")
    }
  }
  
  render() {
    const MovieDetailStyle = {
      boxShadow: "none", backgroundColor: "#EEE9E9"
    }
    const PosterStyle = {
      top: "10px", boxShadow: "none"
    }
    const { location } = this.props
    if (location.state) {
      return <MovieContent style={MovieDetailStyle}>
        <Poster src={location.state.poster} alt={location.state.title} 
        title={location.state.title} style={PosterStyle} />
        <ContentTitle style={{ fontSize: 28 }}>{location.state.title}</ContentTitle>
        <ContentText>{location.state.year}</ContentText>
        <Genres>
          {location.state.genres.map((gener, idx) => {
            return <Genre key={idx}>
              <ContentText style={{ fontSize: 11 }}>{gener}</ContentText>
            </Genre>
          })}
          <ContentText>{location.state.summary}</ContentText>
        </Genres>
      </MovieContent>
    } else {
      return null
    }
  }
}

export default Detail;