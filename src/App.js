import React from 'react'
import DesktopNav from './components/Nav/DesktopNav'
import MobileNav from './components/Nav/MobileNav'
import Header from './components/Nav/Header'
import HeaderDivider from './components/Divider/HeaderDivider/HeaderDivider'
import About from './pages/about'
import FooterDivider from './components/Divider/FooterDivider/FooterDivider'
import Footer from './components/Footer/Footer'

export default function App() {
	return (
		<div className="App">
			<HeaderDivider />
			<DesktopNav />
			<header>
				<Header />
				<MobileNav />
			</header>
			<About />
			<Footer />
			<FooterDivider />
		</div>
	)
}
