import React, {Component} from 'react';
import Movieitem from './Movieitem'
import Movie from './MovieData'
import './Movielist.css'
import uuid from 'react-uuid'



/*const Movielist = () => {
    const allMovies=Movie.map(movie => <Movieitem key={uuid()} movies={movie}/>)
    return ( 
        <section>
            {allMovies}
        </section>
     );
}*/

class Movielist extends Component {
    constructor(props) {
        super(props);
        this.state = { Movie: Movie }
    }
    handleAscending=()=>{
        console.log("Ascending")
        const ascendingMovies=this.state.Movie.sort((x, y) => x.year - y.year)
        this.setState({movies: ascendingMovies})
    }
    handleDesending=()=>{
        console.log("descending")
        const descendingMovies=this.state.Movie.sort((x, y) => y.year - x.year)
        this.setState({movies: descendingMovies})
    }
    handleRate=()=>{
        console.log("rate")
        const rateMovies=this.state.Movie.sort((x, y) => x.rate - y.rate)
        this.setState({movies: rateMovies})  
    }
    render() { 
        const allMovies=Movie.map(movie => 
        <Movieitem key={uuid()} movies={movie}/>)
        return (
            <main>
                <div className="button">
                <button onClick={this.handleAscending}>sort by oldest</button>
                <button onClick={this.handleDesending}>sort by newest</button>
                <button onClick={this.handleRate}>sot by rating</button>
                </div>
            <section>
                
            {allMovies}
            
        </section>
        </main> 
         );
    }
}
 

 
export default Movielist;