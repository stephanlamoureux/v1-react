import React from 'react'
import Header from './components/Header'
import DesktopNav from './components/Nav/DesktopNav'
import HeaderDivider from './components/Divider/HeaderDivider'
import FooterDivider from './components/Divider/FooterDivider'
import Footer from './components/Footer'
import '../public/css/styles.css'
import '../public/css/responsive.css'

function App() {
	return (
		<div className="App">
			<HeaderDivider />
			<DesktopNav />
			<Header />
			<Footer />
			<FooterDivider />
		</div>
	)
}

export default App
