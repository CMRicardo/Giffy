import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export default function useGifs({ keyword }) {
	const [loading, setLoading] = useState(false)
	const { gifs, setGifs } = useContext(GifsContext)
	// const [gifs, setGifs] = useState([])

	useEffect(() => {
		setLoading(true)

		const keywordToUse =
			keyword || localStorage.getItem('lastKeyword') || 'Random'

		getGifs({ keyword: keywordToUse }).then((gifs) => {
			setGifs(gifs)
			setLoading(false)
			localStorage.setItem('lastKeyword', keyword)
		})
	}, [keyword])

	return { loading, gifs }
}
