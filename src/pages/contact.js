import React from 'react'
import '../css/contact.css'

export default function Contact() {
	return (
		<main>
			<section id="contact" className="contact">
				<hr className="line" />
				<h2 className="section-header">Contact Me</h2>
				<hr className="line marg-bottom" />
				<div className="form-container">
					<form id="contact-form">
						<fieldset>
							<input type="hidden" name="contact_number" />
							<label for="name" className="contact-label">
								Name
							</label>
							<input type="text" id="name" name="user_name" required />
							<label for="email" className="contact-label">
								E-mail
							</label>
							<input type="email" id="email" name="user_email" required />
						</fieldset>
						<fieldset className="message">
							<label className="contact-label">Message</label>
							<textarea
								id="message"
								name="message"
								rows="7"
								required
								placeholder="Say Hey!"
							></textarea>
						</fieldset>
						<input
							type="submit"
							value="Send"
							className="form-submit"
							id="submit"
						/>
					</form>
				</div>
			</section>
		</main>
	)
}
