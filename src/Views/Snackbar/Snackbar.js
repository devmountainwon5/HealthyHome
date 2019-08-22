import React, { useEffect } from "react"
import Styles from "./Snackbar.module.css"

export default function Snackbar({ isActive, setIsActive, message }) {
	let timer
	const setTimer = () => {
		timer = setTimeout(() => {
			setIsActive(false)
		}, 4500)
	}
	useEffect(() => {
		setTimer()
		return () => clearTimeout(timer)
	}, [])
	return <div className={isActive ? [Styles.snackbar, Styles.open].join(" ") : Styles.snackbar}>{message}</div>
}
