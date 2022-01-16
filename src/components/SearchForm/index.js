import React from 'react'
import { useLocation } from 'wouter'
import 'components/SearchForm/SearchForm.css'
import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({ initialKeyword = '', initialRating = RATINGS[0] }) => {
	const { keyword, rating, times, updateKeyword, updateRating } = useForm({
		initialKeyword,
		initialRating,
	})

	const [location, setLocation] = useLocation()

	const handleSubmit = event => {
		event.preventDefault()

		// Change route
		setLocation(`/search/${keyword}/${rating}`)
	}

	const handleChange = event => {
		updateKeyword(event.target.value)
	}
	const handleSelectOnChange = event => {
		updateRating(event.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='search'>
				<input
					onChange={handleChange}
					placeholder='Search gifs here'
					type='text'
					className='search-bar'
					value={keyword}
				/>
				<input className='search-button' type='submit' value='Search' />
			</div>
			<select
				className='search-select'
				onChange={handleSelectOnChange}
				value={rating}>
				<option className='search-option' disabled>
					Rating types
				</option>
				{RATINGS.map(rating => (
					<option key={rating}>{rating}</option>
				))}
			</select>
			<small>{times}</small>
		</form>
	)
}

export default React.memo(SearchForm)
