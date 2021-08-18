import React from "react";
import s from '../Notification/Notification.modules.css'


export default function Notification({ message }) {
    return (
        <h2 className={s.title}>{ message}</h2>
    )
}