import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
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
      <div className="card">
        <h2 className="titulo">Buscador</h2>
            <form className="d-flex" role="search" onSubmit={(e) => this.handleSubmit(e)}>
            <label className="label" htmlFor="title">Película: </label>
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"  onChange={(e) => this.handleChange(e)}
              value={title}/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        <ul className="row">
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas --
         voy a mapear mi estado donde están las películas y renderizaré un li con un Link
         que me lleve a su detalle y un botón que agregue a favoritas por cada peli.*/}
         {this.props.movies.map((movie) => {
           return (
            <div className="col-sm-3">
             <li key={movie.imdbID} className="card" id="carta">
               <Link to={`/movie/${movie.imdbID}`} className="card-title">{movie.Title}</Link>
             </li>
             <button onClick={()=>this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})} className="btn btn-success" id="boton">
                 Fav
               </button> 
              </div>
           )
         })}
        </ul>
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
