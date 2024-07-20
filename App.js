import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//7e3633bc

const API_URL='http://www.omdbapi.com?apikey=7e3633bc';

const movie1=
    {
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A"
    }


const App = ()=>{

    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState([]);
    


    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);

    }

    
    useEffect(()=>{
        searchMovies('Batman')

},[]);
    

    return(
        <div className="app">
            <h1>MovieLand</h1>
            
            <div classNmae="search">
                <input
                placeholder="Search For MOvies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img src={SearchIcon}
                alt="Search"
                onClick={()=>searchMovies(searchTerm)}/>
            </div >
            { movies.length > 0?
                (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}

            </div> ):
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                        </div>
                )
            }
            
            </div>


        
    );
};

export default App;

