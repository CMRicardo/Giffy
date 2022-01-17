import React, { Suspense } from 'react'
import './App.css'
import { Link, Route } from 'wouter'
import { Details } from './pages/Details'
import { GifsContextProvider } from './context/GifsContext'
import SearchResults from 'pages/SearchResults'
import { Spinner } from 'components/Spinner'

const HomePage = React.lazy(() => import('./pages/Home'))

const App = () => {
	return (
		<div className='App'>
			<Suspense fallback={Spinner}>
				<section className='App-content'>
					<Link to='/'>
						<h1 className='title'>Giffy</h1>
					</Link>
					<GifsContextProvider>
						<Route path='/' component={HomePage} />
						<Route
							path='/search/:keyword/:rating?/:lang?'
							component={SearchResults}
						/>
						<Route path='/gif/:id' component={Details} />
						<Route
							path='/404'
							component={() => <h2>💥 An error ocurred 💥</h2>}
						/>
					</GifsContextProvider>
				</section>
			</Suspense>
		</div>
	)
}

export default App
