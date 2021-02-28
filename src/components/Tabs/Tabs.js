import React, { Component } from 'react';
import './Tabs.css';

export default class Tabs extends Component {
    state = {
        activeIdx: 0,
    };

    setActiveTabIdx = idx => {
        this.setState({
            activeIdx: idx,
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('nextState: ', nextState);
        // console.log('this.state: ', this.state);

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
                            className="BtnDay btn-2"
                            type="button"
                            key={item.id}
                            onClick={() => this.setActiveTabIdx(idx)}
                        >
                            {item.shortName}
                        </button>
                    ))}
                </div>
                <article className="DayContent">
                    <h2>{tab.label}</h2>
                    <p>{tab.content}</p>
                </article>
            </section>
        );
    }
}
