import React, { useCallback } from 'react'
import { useLocation } from 'wouter'
import { ListOfGifs } from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm/index'
import LazyTrending from 'components/TrendingSearches'

import 'pages/Home/Home.css'

const Home = () => {
	//eslint-disable-next-line
	const [location, setLocation] = useLocation()

	const handleSubmit = useCallback(
		({ keyword }) => {
			setLocation(`search/${keyword}`)
		},
		[setLocation]
	)

	return (
		<>
			<SearchForm onSubmit={handleSubmit} />
			<h2>Last search</h2>
			<div className='home-container'>
				<ListOfGifs />
				<LazyTrending className='trends' />
			</div>
		</>
	)
}
export default Home
