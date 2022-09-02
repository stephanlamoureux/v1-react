import React from 'react'
import Typed from 'react-typed'

export default function Nav() {
	return (
		<span>
			{/* <!-- Desktop Nav --> */}
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
					{/* <!-- Desktop Color Mode Toggle --> */}
					<li role="none">
						<div className="mode-toggle" role="menuitem">
							<input
								type="checkbox"
								className="checkbox"
								id="desktop-checkbox"
								aria-label="color mode selector"
							/>
							<label for="desktop-checkbox" className="checkbox-label">
								<i className="fas fa-moon" alt="moon icon"></i>
								<i className="fas fa-sun" alt="sun icon"></i>
								<div className="ball"></div>
							</label>
						</div>
					</li>
					{/* <!-- End Desktop Color Mode Toggle --> */}
				</ul>
			</div>
			{/* <!-- End Desktop Nav --> */}

			{/* <!-- Header --> */}
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
				</div>
				{/* <!-- End Header --> */}

				{/* <!-- Mobile Menu --> */}
				<div id="nav-wrapper" className="nav-wrapper about-nav-wrapper">
					<button
						className="menu hamburger hamburger--vortex"
						type="button"
						aria-label="Menu"
						aria-controls="navigation"
					>
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
					<nav id="navigation" className="navbar">
						<div className="s">
							<img
								src="../../images/icons/favicon.png"
								alt="Icon of the letter S"
							/>
						</div>
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
							{/* <!-- Mobile Color Mode Toggle --> */}
							<li role="none">
								<div className="mode-toggle" role="menuitem">
									<input
										type="checkbox"
										className="mobile-mode-toggle checkbox"
										id="mobile-checkbox"
										aria-label="color mode selector"
									/>
									<label for="mobile-checkbox" className="checkbox-label">
										<i className="fas fa-moon" alt="moon icon"></i>
										<i className="fas fa-sun" alt="sun icon"></i>
										<div className="ball"></div>
									</label>
								</div>
							</li>
							{/* <!-- End Mobile Color Mode Toggle --> */}
						</ul>
					</nav>
				</div>
				{/* <!-- End Mobile Menu --> */}
			</header>
			{/* <!-- Landing Page --> */}
			<div className="landing">
				<div className="terminal-container">
					<div className="terminal-window">
						<div className="terminal-header">
							<div className="terminal-button term-green"></div>
							<div className="terminal-button term-yellow"></div>
							<div className="terminal-button term-red"></div>
						</div>
						<div className="terminal-body">
							<span className="prompt">$ </span>
							<span id="typed" className="typed"></span>
						</div>
					</div>
				</div>

				<div className="arrows-container">
					<a
						href="#about"
						className="arrow-down-link"
						aria-label="link to about me section"
					>
						<svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
					</a>
				</div>
			</div>
			{/* <!-- End Landing Page --> */}
		</span>
	)
}
