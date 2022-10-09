import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';

const numberRandom = Math.floor(Math.random() * 10)
	  console.log(numberRandom)

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const movieName = [
		{
		  Link: "/Images/ironman.jpg",
		  Movie_Name: "Home Alone",
		  Rating: "⭐⭐⭐⭐",
		  Year: "1990",
		},
		{
		  Link: "/Images/ironman.jpg",
		  Movie_Name: "Terminator",
		  Rating: "⭐⭐⭐⭐",
		  Year: "1984",
		},
		{
		  Link: "/Images/ironman.jpg",
		  Movie_Name: "Enter The Dragon",
		  Rating: "⭐⭐⭐",
		  Year: "1973",
		},
		{
		  Link: "/Images/god_father.jpg",
		  Movie_Name: "God Father",
		  Rating: "⭐⭐⭐⭐⭐",
		  Year: "1972",
		},
		{
		  Link: "/Images/ironman.jpg",
		  Movie_Name: "Wall-E",
		  Rating: "⭐⭐⭐⭐",
		  Year: "2008",
		},
		{
		  Link: "/Images/the_little_things.jpg",
		  Movie_Name: "The Little Things",
		  Rating: "⭐⭐⭐",
		  Year: "2021",
		},
		{
		  Link: "/Images/ironman.jpg",
		  Movie_Name: "Psycho",
		  Rating: "⭐⭐⭐⭐",
		  Year: "1960",
		},
		{
		  Link: "/Images/ironman.jpg",
		  Movie_Name: "Up",
		  Rating: "⭐⭐⭐⭐",
		  Year: "2009",
		},
		{
		  Link: "/Images/ironman.jpg",
		  Movie_Name: "Terminator",
		  Rating: "⭐⭐⭐⭐",
		  Year: "1984",
		},
		{
		  Link: "/Images/fast_furious.jpg",
		  Movie_Name: "Fast & Furious",
		  Rating: "⭐⭐⭐⭐⭐",
		  Year: "2001",
		},
	  ];

	  
	  

	  const getMovieRequest = async (searchValue) => {
		movieName.forEach((el, index)=>{
			
		})
		// const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
		const url = `http://www.omdbapi.com/?s=${movieName[numberRandom].Movie_Name}&apikey=263d22d8`;
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		} console.log(movies)
	};

	useEffect(() => {
		getMovieRequest(movieName[numberRandom].Movie_Name);
	},[]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('react-movie-app-favorites')
		);

		if (movieFavorites) {
			setFavorites(movieFavorites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
	};

	const addFavoriteMovie = (movie) => {
		const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavoritesClick={addFavoriteMovie}
					favoriteComponent={AddFavorites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favorites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favorites}
					handleFavoritesClick={removeFavoriteMovie}
					favoriteComponent={RemoveFavorites}
				/>
			</div>
		</div>
	);
};

export default App;