import '../css/MovieCard.css'
import { useMovieContext } from '../context/MovieContext';

function MovieCard({ movie }) {

    const { isFavorite, addFavorite, removeFavorite } = useMovieContext()

    const favorite = isFavorite(movie.id)
     
    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFavorite(movie.id)
            else addFavorite(movie)
        
        
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-overlay">
                <button type="button" className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    Like
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-").slice(0, 2).join("-")}</p>
            </div>
        </div>
    )
}

export default MovieCard;