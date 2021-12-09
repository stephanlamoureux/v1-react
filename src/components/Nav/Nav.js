import React from 'react'
import Typed from 'react-typed'

export default function Nav() {
	return (
		<span>
			<div className="nav-desktop">
				<ul className="desktop-list" role="menu">
					<li className="desktop-link" role="none">
						<a className="link is-active" href="index.html" role="menuitem">
							About
						</a>
					</li>
					<li className="desktop-link" role="none">
						<a className="link" href="pages/blog.html" role="menuitem">
							Blog
						</a>
					</li>
					<li className="desktop-link" role="none">
						<a className="link" href="pages/projects.html" role="menuitem">
							Projects
						</a>
					</li>
					<li className="desktop-link" role="none">
						<a className="link" href="pages/contact.html" role="menuitem">
							Contact
						</a>
					</li>
				</ul>
			</div>
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
						<span id="typed" className="typed">
							<Typed
								strings={[
									'A Frontend Fanatic.',
									"^2000 The <span class='typed-gradient'>Gradient</span> Gangsta.",
									'^2000 An Over-Caffeinated Coder.',
									'^2000 The Duke of Dark Mode.',
								]}
								typeSpeed={70}
								loop={true}
								startDelay={1000}
								backDelay={3000}
								backSpeed={50}
							/>
						</span>
					</p>
				</div>
				<button className="menu" aria-label="Main Menu"></button>
				<nav className="navbar">
					<ul className="nav-list" role="menu">
						<li className="menu-link" role="none">
							<a href="index.html" role="menuitem">
								About
							</a>
						</li>
						<li className="menu-link" role="none">
							<a href="pages/blog.html" role="menuitem">
								Blog
							</a>
						</li>
						<li className="menu-link" role="none">
							<a href="pages/projects.html" role="menuitem">
								Projects
							</a>
						</li>
						<li className="menu-link" role="none">
							<a href="pages/contact.html" role="menuitem">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</span>
	)
}
