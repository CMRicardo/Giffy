import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif({ title, id, url }) {
	return (
		<Link to={`/${id}`} className='gif'>
			<h3>{title}</h3>
			<img loading='lazy' src={url} alt={title} />
		</Link>
	)
}
