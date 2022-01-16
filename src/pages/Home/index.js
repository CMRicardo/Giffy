import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm/index'
import LazyTrending from 'components/TrendingSearches'
import 'pages/Home/Home.css'
import { useGifs } from 'hooks/useGifs'
import { Helmet } from 'react-helmet'

export default function Home() {
	const { gifs } = useGifs()

	return (
		<>
			<Helmet>
				<title>Home | Giffy</title>
				<link rel='canonical' href='https://giffy-cmricardo.vercel.app' />
				<meta name='rating' content='General' />
			</Helmet>
			<SearchForm />
			<h2>Last search</h2>
			<div className='home-container'>
				<ListOfGifs gifs={gifs} />
				<LazyTrending className='trends' />
			</div>
		</>
	)
}
