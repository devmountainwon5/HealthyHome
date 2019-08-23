import React, { useEffect, useCallback, useRef } from "react"
import Styles from "./Snackbar.module.css"

export default function Snackbar({ isActive, setIsActive, message }) {
	let timerRef = useRef()
	const setTimer = useCallback(() => {
		const timer = setTimeout(() => {
			setIsActive(false)
		}, 4500)
		timerRef.current = timer
	}, [setIsActive])
	useEffect(() => {
		setTimer()
		return () => clearTimeout(timerRef.current)
	}, [setTimer])
	return <div className={isActive ? [Styles.snackbar, Styles.open].join(" ") : Styles.snackbar}>{message}</div>
}
