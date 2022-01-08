import React, { Suspense } from 'react'
import './App.css'
import { ListOfGifs } from './components/ListOfGifs/index'
import { Link, Route } from 'wouter'
import { Details } from './pages/Details'
import { GifsContextProvider } from './context/GifsContext'

const HomePage = React.lazy(() => import('./pages/Home'))

const App = () => {
	return (
		<div className='App'>
			<Suspense fallback={null}>
				<section className='App-content'>
					<Link to='/'>
						<h1 className='title'>Giffy</h1>
					</Link>
					<GifsContextProvider>
						<Route path='/' component={HomePage} />
						<Route path='/search/:keyword' component={ListOfGifs} />
						<Route path='/:id' component={Details} />
					</GifsContextProvider>
				</section>
			</Suspense>
		</div>
	)
}

export default App
