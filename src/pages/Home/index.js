import React, { useCallback } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm/index'
import LazyTrending from 'components/TrendingSearches'
import 'pages/Home/Home.css'
import { useGifs } from 'hooks/useGifs'
import { Helmet } from 'react-helmet'

const Home = () => {
	//eslint-disable-next-line
	const [location, setLocation] = useLocation()
	const { gifs } = useGifs()

	const handleSubmit = useCallback(
		({ keyword }) => {
			setLocation(`search/${keyword}`)
		},
		[setLocation]
	)

	return (
		<>
			<Helmet>
				<title>Home | Giffy</title>
				<meta name='rating' content='General' />
			</Helmet>
			<SearchForm onSubmit={handleSubmit} />
			<h2>Last search</h2>
			<div className='home-container'>
				<ListOfGifs gifs={gifs} />
				<LazyTrending className='trends' />
			</div>
		</>
	)
}
export default Home
