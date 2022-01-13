import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

function Gif({ title, id, url }) {
	return (
		<Link to={`/gif/${id}`} className='gif'>
			<h3>{title}</h3>
			<img loading='lazy' src={url} alt={title} />
		</Link>
	)
}

export default React.memo(Gif, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id
})
