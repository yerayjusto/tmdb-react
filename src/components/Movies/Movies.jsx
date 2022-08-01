import React from 'react';

const Movies = ({ movies }) => {

  return (
    <div className="row">
    {movies.map((movie) => (
      <h3 key={movie.id}>{movie.title}</h3>
    ))}
  </div>
  )
}

export default Movies