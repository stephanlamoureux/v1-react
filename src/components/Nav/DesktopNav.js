import React from 'react'

export default function DesktopNav() {
	return (
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
	)
}
