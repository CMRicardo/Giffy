import React from 'react'
import Gif from 'components/Gif/index'
import 'components/ListOfGifs/ListOfGifs.css'

export default function ListOfGifs({ gifs }) {
	return (
		<>
			<div className='gif-container'>
				{gifs.map(({ id, title, url }) => (
					<Gif url={url} title={title} id={id} key={id} />
				))}
			</div>
		</>
	)
}
