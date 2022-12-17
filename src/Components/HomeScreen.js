import "../CSS/HomeScreen.css"
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";
import requests from "../requests";
const HomeScreen = ()=>{
    return (
        <div>
            <Navbar />
            <Banner />
            <Row 
                title = "Netflix Originals"
                fetchUrl={requests.fetchNetflixOg}
                isLargeRow
            />
            <Row 
                title = "Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row 
                title = "Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title = "Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title = "Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
                title = "Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen;