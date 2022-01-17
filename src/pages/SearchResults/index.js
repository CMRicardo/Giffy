import { useRef, useEffect, useCallback } from 'react'
import { Spinner } from 'components/Spinner/index'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import ListOfGifs from 'components/ListOfGifs/index'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm/index'

export default function SearchResults({ params = 'Random' }) {
	const { keyword, rating = 'g', lang = 'en' } = params
	const { loading, gifs, setPage } = useGifs({ keyword, rating, lang })
	const externalRef = useRef()
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	})

	const title = gifs ? `${gifs.length} results of ${keyword}` : ''

	//eslint-disable-next-line
	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[setPage]
	)

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage()
	}, [isNearScreen, debounceHandleNextPage])

	if (loading)
		return (
			<>
				<Helmet>
					<title>Loading...</title>
				</Helmet>
				<div className='gif-container'>
					<Spinner />
				</div>
			</>
		)

	return (
		<>
			<Helmet>
				<title>{decodeURI(title)}</title>
				<meta name='description' content={title} />
			</Helmet>
			<SearchForm
				initialKeyword={keyword}
				initialRating={rating}
				initialLang={lang}
			/>
			<h2>{decodeURI(keyword)}</h2>

			<ListOfGifs gifs={gifs} />

			<div ref={externalRef} id='visor'></div>
		</>
	)
}
