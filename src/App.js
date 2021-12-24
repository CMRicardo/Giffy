import React from 'react'
import './App.css'
import { ListOfGifs } from './components/ListOfGifs'
import { Link, Route } from 'wouter'

const App = () => {
	return (
		<div className='App'>
			<section className='App-content'>
				<Link to='/' className='title'>
					Giffy
				</Link>
				<Link to='/gif/pandas'>Pandas</Link>
				<Link to='/gif/avengers'>Avengers</Link>
				<Link to='/gif/rick'>Rick</Link>
				<Link to='/gif/morty'>Morty</Link>
				<Route path='/gif/:keyword' component={ListOfGifs} />
			</section>
		</div>
	)
}

export default App
