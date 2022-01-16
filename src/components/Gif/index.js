import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

function Gif({ title, id, url }) {
	return (
		<Link to={`/gif/${id}`} className='gif'>
			<img loading='lazy' src={url} alt={title} />
			<p>{title}</p>
		</Link>
	)
}

export default React.memo(Gif, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id
})
