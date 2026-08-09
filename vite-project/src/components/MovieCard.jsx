function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("Se ha agregado a favoritos")
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.img} alt={movie.title} />
            </div>
            <div className="movie-overlay">
                <button className="fav-btn" onClick={onFavoriteClick}>
                    Like
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;