import React from 'react';
import './NavBar.css';

const DayList = ({ days }) => (
    <section>
        <ul className="day-box">
            <div className="logo-box">
                <p className="logo-text">SaVo</p>
                <p className="logo-text--big">DEV</p>
            </div>

            {days.map(({ shortName, id }) => (
                <li key={id} className="day-box__container">
                    <p className="day-box__item">{shortName}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default DayList;
