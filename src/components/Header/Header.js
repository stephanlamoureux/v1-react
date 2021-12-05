import React from 'react'
import MobileNav from '../../components/Nav/MobileNav'

export default function Header() {
	return (
		<header>
			<div className="center-header">
				<h1 className="header-title">
					<span className="header-gradient">
						<span className="spacing">
							Stephan
							<span className="hidden">Lamoureu</span>
						</span>
						<span className="hidden">x</span>
					</span>
					<span className="show header-gradient">L.</span>
				</h1>
				<p className="header-sub">
					<span id="typed" className="typed"></span>
				</p>
			</div>
			<MobileNav />
		</header>
	)
}
