import React, { useState, type PropsWithChildren } from "react"
import { createPortal } from "react-dom"

export default (props: PropsWithChildren) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			{createPortal(
				<div
					id="modal"
					style={{ display: isOpen ? "block" : "none" }}
					className="fixed z-10 h-[100dvh] w-screen bg-red-200"
				>
					<div id="modal-content">{props.children}</div>
				</div>,
				document.body,
			)}
		</>
	)
}
