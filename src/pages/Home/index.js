import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { ListOfGifs } from '../../components/ListOfGifs'

import './Home.css'

const TRENDING_GIFS = ['Pandas', 'Avengers', 'DBZ', 'Rick and Morty']

export const Home = () => {
	const [keyword, setKeyword] = useState('')
	const [location, setLocation] = useLocation()

	const handleSubmit = (event) => {
		event.preventDefault()
		setLocation(`/search/${keyword}`)
	}
	const handleChange = (event) => {
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
			</form>
			<div className='popular-gifs'>
				<h3>Popular Gifs</h3>
				{TRENDING_GIFS.map((trend) => (
					<Link to={`/search/${trend}`} key={trend}>
						Gifs de {trend}
					</Link>
				))}
			</div>
			<ListOfGifs />
		</>
	)
}
