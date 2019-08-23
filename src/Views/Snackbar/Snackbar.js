import React, { useState, useEffect } from 'react';
import Styles from './Snackbar.module.css';

export default function Snackbar({isErr, message}){
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        console.log('useEffect')
        activateSnackbar()
    }, [isErr])

    const activateSnackbar = () => {
        if(isErr && !isActive){
            setTimeout(() => {
                setIsActive(false);
            }, 3000);
            setIsActive(true)
        }
    }

    return (
        <div className = {isActive ? [Styles.snackbar, Styles.open].join(" ") : Styles.snackbar} id="snackbar">
            {message}
        </div>
    )
}
