import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/index';


import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieId = this.props.match.params.aux;
        this.props.getMovieDetail(movieId)
    }


    render() {
        return (
            <div className="movie-detail"> 
                <h2>{this.props.movies.Title}</h2>
                <img className="rounded-2" src={this.props.movies.Poster} alt={this.props.movies.Title}/>
                <div id='contenedor'>
                <h4>{`Año: ${this.props.movies.Year}`}</h4>
                <h4>{`Duración: ${this.props.movies.Runtime}`}</h4>
                <h4>{`Elenco: ${this.props.movies.Actors}`}</h4>
                <h4>{`Director/es: ${this.props.movies.Director}`}</h4>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movieDetail
    }
}
function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: (id) => dispatch(getDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);