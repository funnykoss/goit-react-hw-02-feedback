import React from 'react';
import s from '../Statistic/Statistics.module.css';

 export default function Statistics ({ good, neutral, bad, total, positiveFeedbackPercentage}){
    return (
       
           <div>
                <ul className={s.list}>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
                </li>
                </ul>
            </div>
         
     )
}

 
 