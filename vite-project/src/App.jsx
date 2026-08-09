import MovieCard from './components/MovieCard'
import './App.css'

const movieData = {
  title: "Titanic",
  release_date: "1997",
  img: "./assets/hero.png"
}

function App() {

  return (
    <div>
      <MovieCard movie={movieData}></MovieCard>
      <MovieCard movie={{ title: "Pulp Fiction", release_date: "1994", img: "./assets/hero.png" }}></MovieCard>
      <MovieCard movie={{ title: "The Matrix", release_date: "1999", img: "./assets/hero.png" }}></MovieCard>
    </div>
  )
}

export default App;