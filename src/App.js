import React from 'react'
import Header from './components/Header/Header'
import DesktopNav from './components/Nav/DesktopNav'
import HeaderDivider from './components/Divider/HeaderDivider/HeaderDivider'
import FooterDivider from './components/Divider/FooterDivider/FooterDivider'
import Footer from './components/Footer/Footer'

export default function App() {
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
