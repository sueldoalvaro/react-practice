import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext.jsx'
import MovieCard from '../components/MovieCard.jsx';

function Favorites() {
    const { favorites } = useMovieContext();
    
    if (favorites && favorites.length > 0) {
        return (
            <div className='favorites'>
                <h2>Your favorites</h2>
                <div className="movies-grid">
                {favorites?.map((movie) => (<MovieCard key={movie.id} movie={movie} />)
                 )}
                </div>
            </div>
        )
    } else {
        return (
            <div className='favorites-empty'>
                <h2>No favorites yet</h2>
                <p>Like movies and they will appear here.</p>
            </div>
        )
    }
}

export default Favorites;