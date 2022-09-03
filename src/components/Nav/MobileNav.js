import React from 'react'

export default function MobileNav() {
	return (
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
	)
}
