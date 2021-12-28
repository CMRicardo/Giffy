import React from 'react'
import './App.css'
import { ListOfGifs } from './components/ListOfGifs/index'
import { Link, Route } from 'wouter'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { GifsContextProvider } from './context/GifsContext'

const App = () => {
	return (
		<div className='App'>
			<section className='App-content'>
				<Link to='/'>
					<h1 className='title'>Giffy</h1>
				</Link>
				<GifsContextProvider>
					<Route path='/' component={Home} />
					<Route path='/search/:keyword' component={ListOfGifs} />
					<Route path='/:id' component={Details} />
				</GifsContextProvider>
			</section>
		</div>
	)
}

export default App
