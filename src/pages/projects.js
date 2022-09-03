import React from 'react'
import '../css/projects.css'

export default function Projects() {
	return (
		<main>
			<section id="projects" className="projects">
				<hr className="line" />
				<h2 className="section-header">My Projects</h2>
				<hr className="line marg-bottom" />
				<div className="projects-container">
					<div className="projects-grid">
						<div className="projects-cell">
							<a
								href="https://vetswhocode.io/jobs"
								target="_blank"
								rel="noopener noreferrer"
								className="project-tile"
							>
								<img
									src="../images/projects/jobsearch.jpg"
									alt="VetsWhoCode Job Search App"
									className="project-image shrink"
								/>
								<p className="project-name0"></p>
							</a>
						</div>
						<div className="projects-cell">
							<a
								href="https://stephan-blog.vercel.app/"
								target="_blank"
								className="project-tile"
								rel="noopener noreferrer"
							>
								<img
									src="../images/projects/blog.jpg"
									alt="Personal blog made in Next.js"
									className="project-image shrink"
								/>
								<p className="project-name1"></p>
							</a>
						</div>
						<div className="projects-cell">
							<a
								href="https://github.com/Vets-Who-Code/windows-dev-guide"
								target="_blank"
								className="project-tile"
								rel="noopener noreferrer"
							>
								<img
									src="../images/projects/devguide.jpg"
									alt="Windows Developer Setup Guide"
									className="project-image shrink"
								/>
								<p className="project-name2"></p>
							</a>
						</div>
						<div className="projects-cell">
							<a
								href="https://stephanlamoureux.github.io/calc/"
								target="_blank"
								className="project-tile"
								rel="noopener noreferrer"
							>
								<img
									src="../images/projects/calculator.jpg"
									alt="Basic JavaScript Calculator"
									className="project-image shrink"
								/>
								<p className="project-name3"></p>
							</a>
						</div>
						<div className="projects-cell">
							<a
								href="https://stephanlamoureux.github.io/random-dog/"
								target="_blank"
								className="project-tile"
								rel="noopener noreferrer"
							>
								<img
									src="../images/projects/random-dog.jpg"
									alt="Random Dog Generator"
									className="project-image shrink"
								/>
								<p className="project-name4"></p>
							</a>
						</div>
						<div className="projects-cell">
							<a
								href="https://stephanlamoureux.github.io/personal-portfolio/"
								target="_blank"
								className="project-tile"
								rel="noopener noreferrer"
							>
								<img
									src="../images/projects/portfolio.jpg"
									alt="freeCodeCamp Responsive Design Certification"
									className="project-image shrink"
								/>
								<p className="project-name5"></p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
