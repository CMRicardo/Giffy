import React from 'react'
import Gif from 'components/Gif'
import { useGlobalGifs } from 'hooks/useGlobalGifs'

export const Details = ({ params }) => {
	const gifs = useGlobalGifs()

	const gif = gifs.find(singleGif => singleGif.id === params.id)

	return <Gif {...gif} />
}
