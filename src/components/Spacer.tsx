import React from "react"

export default ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
	let marginSize = {
		sm: "12px",
		md: "24px",
		lg: "48px",
	}

	return <br style={{ marginBottom: marginSize[size] }} />
}
