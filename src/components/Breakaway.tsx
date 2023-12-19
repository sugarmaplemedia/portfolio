import React, { type PropsWithChildren } from "react"

export default (props: PropsWithChildren) => (
	<div className="mb-4 grid grid-cols-[9px_1fr] overflow-hidden rounded-md">
		<figure className="bg-primary"></figure>
		<div className="breakaway-content bg-tertiary p-3">
			{props.children}
		</div>
	</div>
)
