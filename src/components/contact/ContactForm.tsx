import React, { useState } from "react"

export default () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [subject, setSubject] = useState("")
	const [message, setMessage] = useState("")
	const [isDisabled, setIsDisabled] = useState(false)

	function sendEmail() {
		setIsDisabled(true)

		fetch("https://formsubmit.co/7da9631d789ff409dfcd29341a4d92aa", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ name, email, subject, message }),
		}).then(() => {
			setIsDisabled(false)
			setName("")
			setEmail("")
			setSubject("")
			setMessage("")
		})
	}

	return (
		<form id="contact-form" className="grid gap-3">
			<div className="flex flex-col">
				<label htmlFor="name-input" className="font-bold">
					Name:
				</label>
				<input
					onChange={({ target: { value } }) => setName(value)}
					id="name-input"
					type="text"
					placeholder="John Smith"
					required
					className="rounded-xl border-2 border-tertiary p-2 drop-shadow-input duration-100 focus:border-secondary focus:outline-none focus:drop-shadow-input-focused"
					value={name}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="email-input" className="font-bold">
					Email Address:
				</label>
				<input
					onChange={({ target: { value } }) => setEmail(value)}
					id="email-input"
					type="email"
					placeholder="johnsmith@orchard.co"
					required
					className="rounded-xl border-2 border-tertiary p-2 drop-shadow-input duration-100 focus:border-secondary focus:outline-none focus:drop-shadow-input-focused"
					value={email}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="subject-input" className="font-bold">
					Subject:
				</label>
				<input
					onChange={({ target: { value } }) => setSubject(value)}
					id="subject-input"
					type="text"
					placeholder="Subject"
					required
					className="rounded-xl border-2 border-tertiary p-2 drop-shadow-input duration-100 focus:border-secondary focus:outline-none focus:drop-shadow-input-focused"
					value={subject}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="msg-input" className="font-bold">
					Message:
				</label>
				<textarea
					onChange={({ target: { value } }) => setMessage(value)}
					id="msg-input"
					required
					rows={8}
					className="rounded-xl border-2 border-tertiary p-2 drop-shadow-input duration-100 focus:border-secondary focus:outline-none focus:drop-shadow-input-focused"
					value={message}
				></textarea>
			</div>
			<button
				type="button"
				onClick={sendEmail}
				disabled={isDisabled}
				className="cursor-pointer rounded-xl border-2 border-secondary bg-tertiary p-1.5 text-primary hover:border-primary hover:bg-secondary focus:border-primary focus:bg-secondary focus:outline-none disabled:grayscale-[90%] disabled:hover:border-secondary disabled:hover:bg-tertiary"
			>
				Send Message
			</button>
		</form>
	)
}
