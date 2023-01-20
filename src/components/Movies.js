import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      <h1>Movies Page</h1>
      <div>
        {movies.map((movie) => {
          return (
            <div key={movie.title}>
              <h2>Name: {movie.title}</h2>
              <p>Time: {movie.time}</p>
              <div>
                <h3>Genres:</h3>
                <ul>
                  {movie.genres.map((genre) => {
                    return <li key={genre}>{genre}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Movies;