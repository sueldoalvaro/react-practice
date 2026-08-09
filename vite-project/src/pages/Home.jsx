import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [search, setSearch] = useState("");

    const movies = [
        {
            id: 1,
            title: "Titanic",
            release_date: "1997",
            img: "./assets/hero.png"
        },
        {
            id: 2,
            title: "Pulp Fiction",
            release_date: "1994",
            img: "./assets/hero.png"
        },
        {
            id: 3,
            title: "The Matrix",
            release_date: "1999",
            img: "./assets/hero.png"
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(search)
    };


    return (
        <div className="home">
            <h1>Home</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    movie =>
                        movie.title.toLowerCase().startsWith(search.toLocaleLowerCase()) && (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                )}

            </div>
        </div>
    )
}

export default Home;