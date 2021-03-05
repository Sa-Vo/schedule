import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import { GetCurDay } from './GetCurDay';
import { uuid } from 'uuidv4';
import './Tabs.css';

export default class Tabs extends Component {
    state = {
        activeIdx: GetCurDay(),
    };

    setActiveTabIdx = idx => {
        this.setState({
            activeIdx: idx,
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.activeIdx !== this.state.activeIdx;
    }

    render() {
        const tab = this.props.items[this.state.activeIdx];

        return (
            <section className="SectionSchedule">
                <div className="DayBox">
                    <div className="LogoBox">
                        <p className="logo-text">SaVo</p>
                        <p className="logo-text--big">DEV</p>
                    </div>
                    {this.props.items.map((item, idx) => (
                        <button
                            className="BtnDay"
                            type="button"
                            key={item.id}
                            onClick={() => this.setActiveTabIdx(idx)}
                        >
                            {item.shortName}
                        </button>
                    ))}
                </div>

                <article className="DayContent">
                    <h2 className="Day">Розклад на {tab.label}</h2>

                    <ul className="LessonsBox">
                        {tab.schedule.map(
                            ({
                                description,
                                url,
                                id = uuid(),
                                timeStart,
                                timeEnd,
                            }) => (
                                <li key={id} className="LessonItem">
                                    <a href={url} className="LessonUrl">
                                        {description}
                                    </a>
                                    <div className="TimeBoxLesson">
                                        <p className="TimeLesson">
                                            {timeStart}
                                        </p>
                                        <p className="TimeLesson">{timeEnd}</p>
                                    </div>
                                </li>
                            ),
                        )}
                    </ul>

                    <>
                        <Clock />
                    </>
                </article>
            </section>
        );
    }
}
