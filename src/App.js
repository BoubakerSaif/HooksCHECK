import React from "react";
import movies from "./Data";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";

function App() {
  return (
    <div>
      <AddMovie />
      <br />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
