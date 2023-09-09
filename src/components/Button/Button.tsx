import { Icon } from "@iconify-icon/react"
import styles from "./Button.module.css"
import clsx from "clsx"
import React from "react"

function setClass(name?: string) {
	switch (name) {
		case "light":
			return styles.light
		default:
			return styles.important
	}
}

function stylesCall(a: string) {
	return "styles." + a
}

interface propTypes {
	type?: string
	mode?: string
	important?: boolean
	link: string
	children: string
	newTab?: boolean
}

const propDefaults: any = {
	type: "",
	mode: "light",
	important: false,
}

const Button: React.FC<propTypes> = (propsIn: propTypes) => {
	const props = { ...propDefaults, ...propsIn }
	if (!props.type.includes("arrow")) {
		return (
			<a
				id={styles["button"]}
				className={
					props.important ? styles["important"] : styles[props.mode]
				}
				href={props.link}
				target={props.newTab ? "_blank" : "_self"}>
				{props.children}
			</a>
		)
	} else {
		return (
			<a
				id={styles["button"]}
				className={
					props.type.includes("left")
						? clsx(styles["arrow-left"], styles["arrow"])
						: clsx(styles["arrow-right"], styles["arrow"])
				}
				href={props.link}
				target={props.newTab ? "_blank" : "_self"}>
				<Icon
					className={styles["arrow"]}
					icon={`tabler:${
						props.type.includes("left")
							? "arrow-left"
							: "arrow-right"
					}`}
				/>
				{props.children}
			</a>
		)
	}
}

export default Button
