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
	)
}
