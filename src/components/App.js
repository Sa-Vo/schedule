import React, { Component } from 'react';
import Layout from './Layout';
import DayList from './DayList/DayList';
import DayPanel from './DayPanel/DayPanel';
import './DayPanel/DayPanel.css';

export default class App extends Component {
    state = {
        days: [
            { id: 1, name: 'Понедіунок', shortName: 'Mon' },
            { id: 2, name: 'Вівторок', shortName: 'Tue' },
            { id: 3, name: 'Середа', shortName: 'Wed' },
            { id: 4, name: 'Чітверг', shortName: 'Thu' },
            { id: 5, name: 'Пєтниця', shortName: 'Fri' },
        ],
        isBoxVisible: false,
    };

    toggleBody = name => {
        this.setState(prevState => ({
            isBoxVisible: !prevState.isBoxVisible,
        }));
    };

    render() {
        const { isBoxVisible } = this.state;

        return (
            <Layout>
                <DayList days={this.state.days} onShowBody={this.toggleBody} />
                <div className={`box ${isBoxVisible ? '' : 'hidden'}`}>
                    <DayPanel />
                </div>
            </Layout>
        );
    }
}
