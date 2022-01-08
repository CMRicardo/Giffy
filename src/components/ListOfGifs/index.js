import { useRef, useEffect, useCallback } from 'react'
import Gif from 'components/Gif/index'
import { Spinner } from 'components/Spinner/index'
import useGifs from 'hooks/useGifs'
import { Route } from 'wouter'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import 'components/ListOfGifs/ListOfGifs.css'

export const ListOfGifs = ({ params = 'Random' }) => {
	const { keyword } = params
	const { loading, gifs, setPage } = useGifs({ keyword })
	const externalRef = useRef()
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	})

	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200),
		[setPage]
	)

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage()
	}, [isNearScreen, debounceHandleNextPage])

	if (loading)
		return (
			<div className='gif-container'>
				<Spinner />
			</div>
		)

	return (
		<>
			<h2>{keyword}</h2>
			<div className='gif-container'>
				{gifs.map(({ id, title, url }) => (
					<Gif url={url} title={title} id={id} key={id} />
				))}
			</div>
			<Route path='/search/:keyword'>
				<div ref={externalRef} id='visor'></div>
			</Route>
		</>
	)
}
