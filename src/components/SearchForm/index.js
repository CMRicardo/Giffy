import React, { useState } from 'react'

const SearchForm = ({ onSubmit }) => {
	const [keyword, setKeyword] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit({ keyword })
	}
	const handleChange = event => {
		setKeyword(event.target.value)
	}

	return (
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
	)
}

export default React.memo(SearchForm)
