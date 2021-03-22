import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import ToggleBtnPanel from './Buttons';
import { GetCurDay } from '../../utilities/utileties';
import { uuid } from 'uuidv4';
import './Tabs.css';
import tabsBtn from '../../tabs.json';

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
                    <a
                        className="Logo"
                        rel="noopener noreferrer"
                        href="https://sa-vo.github.io/SaVo/"
                        target="_blank"
                    >
                        <div className="LogoBox">
                            <p className="logo-text">SaVo</p>
                            <p className="logo-text--big">DEV</p>
                        </div>
                    </a>

                    <ToggleBtnPanel
                        getActiveIdx={this.setActiveTabIdx}
                        items={tabsBtn}
                    />
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
                                    <a href={url} className="LessonUrl" target="_blank">
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
                </article>
            </section>
        );
    }
}
