import { React, useState, useEffect } from 'react'
import { Category } from 'components/Category'
import getTrendingTermsService from 'services/getTrendingTermsService'

export default function TrendingSearches() {
	const [trends, setTrends] = useState([])

	useEffect(() => {
		getTrendingTermsService().then(setTrends)
	}, [])

	return (
		<>
			<h2>Trending Terms</h2>
			<ul className='trending-searches'>
				{trends.map(trend => (
					<Category key={trend} name={trend} />
				))}
			</ul>
		</>
	)
}
