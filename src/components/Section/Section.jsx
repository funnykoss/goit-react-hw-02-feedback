import React from 'react';
import s from '../Section/Section.modules.css';

export default function Section({ title = 'Title', children }){
    return (
        <div className={s.section}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </div>
    );
}
Section.defaultProps = {
  title: "Statistics",
};