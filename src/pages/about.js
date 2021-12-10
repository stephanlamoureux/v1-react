import React from 'react'
import '../css/about.css'
import '../lib/fonts/Inter-VariableFont_slnt,wght.ttf'
import '../lib/fonts/Proza-Regular.otf'
import profile from '../images/profile/profile-pic.webp'

export default function About() {
	return (
		<main>
			<section id="about" className="about">
				<hr className="line" />
				<h2 className="section-header">About Me</h2>
				<hr className="line marg-bottom" />

				{/* <!-- Profile Image --> */}
				<div className="profile-div">
					<a
						href="../StephanLamoureux.pdf"
						target="_blank"
						rel="noopener nonoreferrer"
						className="hire-me inline"
					>
						<img src={profile} alt="Headshot of Stephan" className="round" />
						<span className="tooltip">Hire Me!</span>
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
								{' '}
								I'm Steve, a developer from Providence, Rhode
								<span aria-label="anchor emoji" role="img">
									⚓
								</span>
								Island.
							</h3>
						</div>
						<p className="about-p">
							<i className="fal fa-code-merge p-icon"></i> I am a{' '}
							<a
								href="https://vetswhocode.io"
								target="_blank"
								rel="noopener noreferrer"
								className="tech-used-link"
							>
								Vets Who Code
							</a>{' '}
							alumni making a career transition into coding. Fueled by copious
							amounts of caffeine and curiosity, I love to follow my
							fascinations wherever they take me. As a lifelong learner, I
							thrive on continuing to challenge myself and do worthwhile things
							that matter. I’m a self-starter who can pick up new skills quickly
							and juggle different projects and roles. I also love collaborating
							with others and contributing to the open-source community.
						</p>

						<p className="about-p">
							What initially made me fall in love with web development was the
							duality of using my creative side to design and my logical side to
							code. I have always been a serial hobbyist and jack of all trades
							type, and this profession allows me to scratch all my intellectual
							itches.
						</p>

						<p className="about-p">
							My goal is to make the web beautiful and available for everyone.
							It’s possible to create elegant products that are also performant
							and accessible, with simple user experiences, so why not do it
							all?
						</p>
					</div>
					{/* <!-- End Bio --> */}

					{/* <!-- Tech Used --> */}
					<div className="paragraph">
						<h3 className="about-header">Tech Used</h3>
						<p className="about-p">
							<i className="fal fa-code-merge p-icon"></i> For v1 of my
							portfolio, I focused on the foundations by using semantic HTML
							<i className="fab fa-html5 trio"></i>, responsive CSS
							<i className="fab fa-css3-alt trio"></i> && vanilla JavaScript
							along with the following resources:
						</p>
						<ul className="tech-used">
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://anijs.github.io/"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									AniJS
								</a>{' '}
								- Animation library
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://www.emailjs.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									EmailJS
								</a>{' '}
								- Email service
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://mattboldt.com/demos/typed-js/"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									TypedJS
								</a>{' '}
								- Typing animation library
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://developers.forem.com/api/"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									Dev.to API
								</a>{' '}
								- Blog Posts
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://fontawesome.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									Font Awesome
								</a>{' '}
								- Icon library{' '}
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://draculatheme.com/contribute#color-palette"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									Dracula
								</a>{' '}
								- Color palette
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://rsms.me/inter/"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									Inter
								</a>{' '}
								- Font family
							</li>
						</ul>
					</div>
					{/* <!-- End Tech Used --> */}

					{/* <!-- Future Plans --> */}
					<div className="paragraph">
						<h3 className="about-header">Future Plans</h3>
						<p className="about-p">
							<i className="fal fa-code-merge p-icon"></i> My next step with
							this portfolio is migrating to{' '}
							<a
								href="https://reactjs.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="tech-used-link"
							>
								React
							</a>{' '}
							using{' '}
							<a
								href="https://create-react-app.dev/"
								target="_blank"
								rel="noopener noreferrer"
								className="tech-used-link"
							>
								Create React App
							</a>{' '}
							and then porting it to{' '}
							<a
								href="https://www.gatsbyjs.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="tech-used-link"
							>
								Gatsby
							</a>
							. I decided to go with it for the performance gains and the
							enormous{' '}
							<a
								href="https://www.gatsbyjs.com/plugins"
								target="_blank"
								rel="noopener noreferrer"
								className="tech-used-link"
							>
								plugin library
							</a>
							. With this being a static site it makes more sense than using
							something like{' '}
							<a
								href="https://nextjs.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="tech-used-link"
							>
								Next
							</a>
							, which I'm very eager to try as well. Using Gatsby will also be a
							fun way to get familiar with{' '}
							<a
								href="https://graphql.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="tech-used-link"
							>
								GraphQL
							</a>
							!
						</p>
					</div>
					{/* <!-- End Future Plans --> */}

					{/* <!-- Currently Working On --> */}
					<div className="paragraph">
						<h3 className="about-header">Currently Working On</h3>
						<p className="about-p">
							<i className="fal fa-code-merge p-icon"></i> Here are some of the
							projects I am working on at the moment:
						</p>
						<ul className="tech-used">
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://github.com/Vets-Who-Code/vets-who-code-app"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									VetsWhoCode
								</a>{' '}
								- New features
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://dev.to/stephanlamoureux/git-a-grip-part-1-initial-setup-5c3k?signin=true"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									Git a Grip
								</a>{' '}
								- Finishing blog series
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://github.com/stephanlamoureux/v2"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									Portfolio
								</a>{' '}
								- Migrating this to React
							</li>
							<li className="tech-used-list">
								<i className="fal fa-chevron-right bullet"></i>
								<a
									href="https://github.com/stephanlamoureux/v2"
									target="_blank"
									rel="noopener noreferrer"
									className="tech-used-link"
								>
									NVISION
								</a>{' '}
								- WordPress Site
							</li>
						</ul>
					</div>
					{/* <!-- End Currently Working On --> */}
				</div>
			</section>
		</main>
	)
}
