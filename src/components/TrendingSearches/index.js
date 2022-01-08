import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import 'components/TrendingSearches/trendingSearches.css'
import { Spinner } from 'components/Spinner/index'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending() {
	const { isNearScreen, fromRef } = useNearScreen({
		distance: '100px',
		once: false,
	})

	return (
		<div ref={fromRef}>
			<Suspense fallback={<Spinner />}>
				{isNearScreen ? <TrendingSearches /> : <Spinner />}
			</Suspense>
		</div>
	)
}
