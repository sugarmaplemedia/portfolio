import React, { type PropsWithChildren } from "react"

type Props = PropsWithChildren<{ count?: number }>
export default ({ count = 2, children }: Props) => (
	<div
		className="grid w-full"
		style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
	>
		{children}
	</div>
)
