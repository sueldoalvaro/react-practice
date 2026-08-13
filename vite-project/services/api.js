const API_KEY = 'ec81aaad08ba261b8baabf6f61d7439c';
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.status_message || 'Search failed')
    }
    return data.results || []
}

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.status_message || 'Search failed')
    }
    return data.results || []
}