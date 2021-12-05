import React from 'react'

export default function MobileNav() {
	return (
		<span>
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
		</span>
	)
}
