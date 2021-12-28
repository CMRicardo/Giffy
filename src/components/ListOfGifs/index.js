import Gif from '../Gif/index'
import { Spinner } from '../Spinner/index'
import useGifs from '../../hooks/useGifs'

import './ListOfGifs.css'

export const ListOfGifs = ({ params = 'Random' }) => {
	const { keyword } = params
	const { loading, gifs } = useGifs({ keyword })

	if (loading) return <Spinner />

	return (
		<div className='gif-container'>
			{gifs.map(({ id, title, url }) => (
				<Gif url={url} title={title} id={id} key={id} />
			))}
		</div>
	)
}
