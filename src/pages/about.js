import React from 'react'
import '../css/about.css'
import profile from '../images/profile/profile-pic.webp'

export default function About() {
	return (
		<div>
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
			<main>
				<section id="about" className="about">
					<hr className="line" />
					<h2 className="section-header">About Me</h2>
					<hr className="line marg-bottom" />

					{/* <!-- Profile Image --> */}
					<div className="profile-div">
						<a
							href="../assets/StephanLamoureux.pdf"
							target="_blank"
							rel="noopener nonoreferrer"
							className="hire-me inline"
						>
							<img
								src={profile}
								alt="Head shot of Stephan"
								className="profile-image"
								id="tippy"
								data-anijs="if: mouseenter, do: pulse animated"
							/>
						</a>
					</div>
					{/* <!-- End Profile Image --> */}

					<div className="about-container">
						{/* <!-- Bio --> */}
						<div className="paragraph">
							<div className="steve">
								<span className="hidden-icon">
									<i className="fal fa-terminal p-icon fa-blink"></i>
								</span>
								<h3 className="about-header about-header-inline">
									I'm Steve, a developer from Providence, Rhode⚓Island.
								</h3>
							</div>
							<p className="about-p">
								<i className="fal fa-code-merge p-icon"></i>I am a{' '}
								<a
									href="https://vetswhocode.io"
									target="_blank"
									rel="noopener noreferrer"
									className="vwc"
								>
									Vets Who Code
								</a>{' '}
								alumni making a career transition into coding. Fueled by{' '}
								<strong>all</strong> the caffeine and curiosity, I love to
								follow my fascinations wherever they take me. As a lifelong
								learner, I thrive on continuing to challenge myself and do
								worthwhile things that matter. I’m a self-starter who can pick
								up new skills quickly and juggle different projects and roles. I
								also love collaborating with others and contributing to the
								open-source community.
							</p>
							<p className="about-p">
								What initially made me fall in love with web development was the
								duality of using my creative side to design and my logical side
								to code. I have always been a serial hobbyist and jack of all
								trades type, and this profession allows me to scratch all my
								intellectual itches.
							</p>
							<p className="about-p">
								My goal is to make the web beautiful and available for everyone.
								It’s possible to create elegant products that are also
								performant and accessible, with simple user experiences, so why
								not do it all?
							</p>
						</div>
						{/* <!-- End Bio --> */}

						{/* <!-- Currently Working On --> */}
						<div className="paragraph">
							<h3 className="working-on-header">Currently Working On</h3>
							<p className="about-p">
								<i className="fal fa-code-merge p-icon"></i>
								Here are some of the projects I am working on at the moment:
							</p>
							<ul className="working-on">
								<li className="working-on-list">
									<i className="fal fa-chevron-right bullet"></i>
									<a
										href="https://github.com/Vets-Who-Code/vets-who-code-app"
										target="_blank"
										rel="noopener noreferrer"
										className="working-on-link"
									>
										VetsWhoCode
									</a>{' '}
									- Adding new features to the web app and maintaining the job
									search feature
								</li>
								<li className="working-on-list">
									<i className="fal fa-chevron-right bullet"></i>
									<a
										href="https://dev.to/stephanlamoureux/git-a-grip-part-1-initial-setup-5c3k?signin=true"
										target="_blank"
										rel="noopener noreferrer"
										className="working-on-link"
									>
										Git a Grip
									</a>{' '}
									- Finishing my multi-part blog series on Git fundamentals
								</li>
								<li className="working-on-list">
									<i className="fal fa-chevron-right bullet"></i>
									<a
										href="https://github.com/stephanlamoureux/blog"
										target="_blank"
										rel="noopener noreferrer"
										className="working-on-link"
									>
										Personal Blog
									</a>{' '}
									- Adding new features to my blog using Next.js
								</li>
								<li className="working-on-list">
									<i className="fal fa-chevron-right bullet"></i>
									<a
										href="https://github.com/Vets-Who-Code/windows-dev-guide"
										target="_blank"
										rel="noopener noreferrer"
										className="working-on-link"
									>
										Windows Dev Guide
									</a>{' '}
									- Writing additional sections for my developer setup guide on
									Windows
								</li>
								<li className="working-on-list">
									<i className="fal fa-chevron-right bullet"></i>
									<a
										href="https://github.com/stephanlamoureux/v2"
										target="_blank"
										rel="noopener noreferrer"
										className="working-on-link"
									>
										Portfolio v2
									</a>{' '}
									- Migrating my current portfolio into React
								</li>
							</ul>
						</div>
						{/* <!-- End Currently Working On --> */}
					</div>
				</section>
			</main>
		</div>
	)
}
