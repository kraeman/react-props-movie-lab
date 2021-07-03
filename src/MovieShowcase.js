import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    debugger
    movieData.map((movie, i) => <MovieCard title={movie.title} key={i} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>)
  }
  
  render() {
    // debugger
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
