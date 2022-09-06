import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
//importo la action removeMovieFavorite
import { removeMovieFavorite } from "../../actions"
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div className="contenedor" id="contenedor-favoritos">
        <h2>Mi lista</h2>
        <div  id="favoritos">
          {this.props.movies?.map((movie) => {
            return (
              <div key={movie.id} className="card" id="carta-favorita">
                <button onClick={() => this.props.removeMovieFavorite(movie.id)} className="btn btn-danger">X</button>
                <img src={movie.poster} alt={movie.title} className="card-img-top" />
                <Link to={`/movie/${movie.id}`} className="card-title">{movie.title}</Link>
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
    movies: state.moviesFavourites
  }
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
