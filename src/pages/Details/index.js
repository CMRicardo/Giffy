import React from 'react'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import { Spinner } from 'components/Spinner/index'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

export const Details = ({ params }) => {
	const { gif, isError, isLoading } = useSingleGif({ id: params.id })
	const title = gif ? gif.title : ''

	if (isLoading) {
		return (
			<>
				<Helmet>
					<title>Loading...</title>
				</Helmet>
				<Spinner />
			</>
		)
	}

	if (isError) return <Redirect to='/404' />

	if (!gif) return null

	return (
		<>
			<Helmet>
				<title>{title} | Giffy</title>
			</Helmet>
			<Gif {...gif} />
		</>
	)
}
