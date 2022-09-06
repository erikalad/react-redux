import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { BsSuitHeart , BsInfoCircleFill , BsHandIndexThumb} from "react-icons/bs";
import './Buscador.css';
//importo las actions
import { addMovieFavorite, getMovies } from "../../actions"


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //completo la función handleSubmit
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div className="card" id="buscador">
        <h2 className="titulo">Buscador</h2>
            <form className="d-flex" role="search" onSubmit={(e) => this.handleSubmit(e)}>
            <label className="label" htmlFor="title">Película: </label>
                <input className="form-control me-2" type="search" placeholder="Nombre de la pelicula.." aria-label="Search"  onChange={(e) => this.handleChange(e)}
              value={title}/>
                <button className="btn btn-outline-success" id="buscar" type="submit">Buscar <BsHandIndexThumb /></button>
            </form>
        <div className="contenedor-cartas">
         {this.props.movies.map((movie) => {
           return (
            <div className="card" id="carta-individual">
             <div key={movie.imdbID} className="card-body" id="carta">
              <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
              </div>
               <Link to={`/movie/${movie.imdbID}`} className="card-title">{movie.Title}<BsInfoCircleFill /></Link>
             
             <button onClick={()=>this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID, poster: movie.Poster})} className="btn btn-primary" id="boton">
             <BsSuitHeart />
               </button> 
              </div>
           )
         })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
