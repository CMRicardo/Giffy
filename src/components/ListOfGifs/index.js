import Gif from 'components/Gif/index'
import { Spinner } from 'components/Spinner/index'
import useGifs from 'hooks/useGifs'

import 'components/ListOfGifs/ListOfGifs.css'

export const ListOfGifs = ({ params = 'Random' }) => {
	const { keyword } = params
	const { loading, gifs, setPage } = useGifs({ keyword })

	const handleNextPage = () => setPage(prevPage => prevPage + 1)

	if (loading)
		return (
			<div className='gif-container'>
				<Spinner />
			</div>
		)

	return (
		<div className='gif-container'>
			{gifs.map(({ id, title, url }) => (
				<Gif url={url} title={title} id={id} key={id} />
			))}
			<button onClick={handleNextPage}>Get next page</button>
		</div>
	)
}
