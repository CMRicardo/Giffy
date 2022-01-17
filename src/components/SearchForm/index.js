import React from 'react'
import { useLocation } from 'wouter'
import 'components/SearchForm/SearchForm.css'
import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGUAGES = [
	'en',
	'es',
	'pt',
	'id',
	'fr',
	'ar',
	'tr',
	'th',
	'vi',
	'de',
	'it',
	'ja',
	'zh-CN',
	'zh-TW',
	'ru',
	'ko',
	'pl',
	'nl',
	'ro',
	'hu',
	'sv',
	'cs',
	'hi',
	'bn',
	'da',
	'fa',
	'tl',
	'fi',
	'he',
	'ms',
	'no',
	'uk',
]

const SearchForm = ({
	initialKeyword = '',
	initialRating = RATINGS[0],
	initialLang = LANGUAGES[0],
}) => {
	const {
		keyword,
		rating,
		times,
		lang,
		updateLang,
		updateKeyword,
		updateRating,
	} = useForm({
		initialKeyword,
		initialRating,
		initialLang,
	})

	// eslint-disable-next-line
	const [location, setLocation] = useLocation()

	const handleSubmit = event => {
		event.preventDefault()

		// Change route
		setLocation(`/search/${keyword}/${rating}/${lang}`)
	}

	const handleChange = event => {
		updateKeyword(event.target.value)
	}
	const handleRatingOnChange = event => {
		updateRating(event.target.value)
	}
	const handleLangOnChange = event => {
		updateLang(event.target.value)
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
				onChange={handleRatingOnChange}
				value={rating}>
				<option className='search-option' disabled>
					Rating types
				</option>
				{RATINGS.map(rating => (
					<option className='search-option' key={rating}>
						{rating}
					</option>
				))}
			</select>

			<select
				className='search-select'
				value={lang}
				onChange={handleLangOnChange}>
				<option className='search-option' disabled>
					Languages
				</option>
				{LANGUAGES.map(lang => (
					<option className='search-option' key={lang}>
						{lang}
					</option>
				))}
			</select>
			<small>{times}</small>
		</form>
	)
}

export default React.memo(SearchForm)
