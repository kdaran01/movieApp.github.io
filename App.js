import {  useState } from 'react';
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

function App() {
  const [movies,setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const[dis,setDis] = useState('')

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
    setDis('No movies found')
  }
  

  return (
    <div className="app">
     <h1>Movie App</h1>

     <div className="search">
      <input placeholder='Search Here' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} autoFocus/>
      <img src={SearchIcon} alt='search' onClick={()=> searchMovies(searchTerm)}/>
     </div>
     

     {
      (movies?.length > 0 ? (<div className="container">{movies.map( (movie) => (<MovieCard movie={movie}/>) )}</div>) 
      : (<div className="empty"><h2>{dis}</h2></div>))
  
      
     }
     
    </div>
  );
}
export default App;
