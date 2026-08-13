import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from "../../services/api.js";


function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError('Failed to load movies')
            } finally {
                setIsLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const  handleSearch = async (e) => {
        e.preventDefault()
        if (!search.trim()) return;
        if (isLoading) return;

        setIsLoading(true);
        try {
            const searchResults = await searchMovies(search);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError('Failed to search movies');
        } finally {
            setIsLoading(false);
        }
        setSearch("")
    };
    const onFavoriteClick = () => {
        setFavorite((prev) => !prev);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            { isLoading ? ( <div className="loading"> Is loading... </div> ) : ( <div className="movies-grid">
                {movies?.map(
                    movie =>
                        movie.title.toLowerCase().startsWith(search.toLocaleLowerCase()) && (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                )}
            </div> )
            }

            
        </div>
    )
}

export default Home;