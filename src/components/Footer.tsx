import React from "react"
import Spacer from "./Spacer"

export default () => (
	<footer className="flex flex-col items-center justify-center">
		<Spacer />
		<hr className="h-0 w-4/5 max-w-xl border-0 border-t-4 border-dotted border-primary" />
		<p className="m-5 font-bold text-primary">
			Website developed by Harrison Bouche. © 2024
		</p>
	</footer>
)
