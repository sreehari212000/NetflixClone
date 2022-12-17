import axios from "../axios"
import { useEffect, useState } from "react"
import "../CSS/Row.css"
const Row = ({title, fetchUrl, isLargeRow = false})=>{
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const [movies, setMovies] = useState([])

    useEffect(function(){
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="row">
            <h2 className="title">{title}</h2> 

            <div className="row-posters">
                {movies.map((movie)=>
                  ( ( isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path))&&( 
                <img 
                    className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                    key={movie.id}
                    src={`${BASE_URL}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}/>
                    
                ))
                }
            </div>
        </div>
    )
}

export default Row