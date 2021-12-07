import React from 'react'

export default function Footer() {
	const today = new Date()

	return (
		<footer>
			<div className="icons-flex">
				<span className="fa-stack fa-2x">
					<i className="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://github.com/stephanlamoureux"
						target="_blank"
						className="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my GitHub"
					>
						<i className="fab fa-github fa-stack-1x fa-inverse red"></i>
					</a>
				</span>
				<span className="fa-stack fa-2x">
					<i className="fas fa-circle fa-stack-2x"></i>
					<a
						href="assets/StephanLamoureux.pdf"
						target="_blank"
						className="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my Résumé"
						title="Résumé"
					>
						<i className="fas fa-file-user fa-stack-1x fa-inverse orange"></i>
					</a>
				</span>
				<span className="fa-stack fa-2x">
					<i className="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://twitter.com/sa_lamoureux"
						target="_blank"
						className="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my Twitter"
					>
						<i className="fab fa-twitter fa-stack-1x fa-inverse purple"></i>
					</a>
				</span>
				<span className="fa-stack fa-2x">
					<i className="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://dev.to/stephanlamoureux"
						target="_blank"
						className="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my Dev.to"
					>
						<i className="fab fa-dev fa-stack-1x fa-inverse yellow"></i>
					</a>
				</span>
				<span className="fa-stack fa-2x">
					<i className="fas fa-circle fa-stack-2x"></i>
					<a
						href="https://www.linkedin.com/in/stephanlamoureux"
						target="_blank"
						className="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my LinkedIn"
					>
						<i className="fab fa-linkedin fa-stack-1x fa-inverse cyan"></i>
					</a>
				</span>
				<span className="fa-stack fa-2x">
					<i className="fas fa-circle fa-stack-2x"></i>
					<a
						href="mailto:sa.lamoureux@gmail.com"
						target="_blank"
						className="icon-links"
						rel="noopener noreferrer"
						aria-label="Link to my email"
					>
						<i className="fa fa-envelope fa-stack-1x fa-inverse green"></i>
					</a>
				</span>
			</div>
			<p className="coded-by">
				<a
					href="https://github.com/stephanlamoureux/v1"
					target="_blank"
					className="source-link"
					rel="noopener noreferrer"
				>
					<span className="made">Made with </span>
					<span className="heart animate-beat">🖤</span>
					<span className="stephan">
						{' '}
						by Stephan Lamoureux &copy;{today.getFullYear()}
					</span>
				</a>
			</p>
		</footer>
	)
}
