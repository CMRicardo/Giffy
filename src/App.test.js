import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', async () => {
	render(<App />)
	const title = await screen.findByText(/Last search/i)
	expect(title).toBeInTheDocument()
})
