import React from 'react'

export default function Header() {
	return (
		<div className="center-header">
			<h1 className="header-title">
				<span className="header-gradient">
					<span className="spacing">
						Stephan
						<span className="hidden"> Lamoureu</span>
					</span>
					<span className="hidden">x</span>
				</span>
				<span className="show header-gradient">L.</span>
			</h1>
			<p class="header-sub">
				<span id="typed" class="typed"></span>
			</p>
		</div>
	)
}
