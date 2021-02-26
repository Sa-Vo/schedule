import React from 'react';
import './NavBar.css';

const DayList = ({ days, onShowBody }) => (
    <section>
        <ul className="day-box">
            <div className="logo-box">
                <p className="logo-text">SaVo</p>
                <p className="logo-text--big">DEV</p>
            </div>

            {days.map(({ shortName, id, name }) => (
                <li
                    key={id}
                    className="day-box__container"
                    onClick={() => onShowBody(name)}
                >
                    <p className="day-box__item">{shortName}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default DayList;
