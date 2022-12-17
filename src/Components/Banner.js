import {useEffect, useState} from "react"
import axios from "../axios"
import '../CSS/Banner.css'
import requests from "../requests"

const Banner = ()=>{
    const [movie, setMovie] = useState([])
    
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOg)    
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            )
            return request
        }   
        fetchData()
    }, [])
    function truncateText(str, n){
        return str?.length > n ? str.substr(0, n-1)+'...':str
    }
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center"
        }}>
            <div className="banner-contents">
                <h1 className="banner-title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My list</button>
                </div>
                <h1 className="banner-description">
                    {truncateText(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fadebottom"></div>
        </header>
    )
}

export default Banner;