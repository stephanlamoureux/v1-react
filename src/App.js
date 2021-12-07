import React from 'react'
import Nav from './components/Nav/Nav'
import HeaderDivider from './components/Divider/HeaderDivider/HeaderDivider'
import About from './pages/about'
import FooterDivider from './components/Divider/FooterDivider/FooterDivider'
import Footer from './components/Footer/Footer'

export default function App() {
	return (
		<div className="App">
			<HeaderDivider />
			<Nav />
			<About />
			<Footer />
			<FooterDivider />
		</div>
	)
}
