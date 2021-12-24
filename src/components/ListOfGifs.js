import { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

import './ListOfGifs.css'

export const ListOfGifs = ({ params }) => {
	const { keyword } = params
	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		setLoading(true)
		getGifs({ keyword }).then((gifs) => {
			setGifs(gifs)
			setLoading(false)
		})
	}, [keyword])

	if (loading) return <i>Loading...🐌</i>

	return (
		<div className='gif-container'>
			{gifs.map(({ id, title, url }) => (
				<Gif url={url} title={title} id={id} key={id} />
			))}
		</div>
	)
}
