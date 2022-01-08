import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { ListOfGifs } from 'components/ListOfGifs'
import LazyTrending from 'components/TrendingSearches'

import 'pages/Home/Home.css'

const Home = () => {
	const [keyword, setKeyword] = useState('')
	const [location, setLocation] = useLocation()

	const handleSubmit = event => {
		event.preventDefault()
		setLocation(`/search/${keyword}`)
	}
	const handleChange = event => {
		setKeyword(event.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					placeholder='Search gifs here'
					type='text'
					className='search-bar'
					value={keyword}
				/>
				<input className='search-button' type='submit' value='Search' />
			</form>
			<h2>Last search</h2>
			<div className='home-container'>
				<ListOfGifs />
				<LazyTrending className='trends' />
			</div>
		</>
	)
}
export default Home
