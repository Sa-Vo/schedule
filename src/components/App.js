import React, { Component } from 'react';
import DayList from './DayList/DayList';

export default class App extends Component {
    state = {
        days: [
            { id: 1, name: 'Понедіунок', shortName: 'Mon' },
            { id: 2, name: 'Вівторок', shortName: 'Tue' },
            { id: 3, name: 'Середа', shortName: 'Wed' },
            { id: 4, name: 'Чітверг', shortName: 'Thu' },
            { id: 5, name: 'Пєтниця', shortName: 'Fri' },
        ],
    };

    render() {
        return (
            <div>
                <DayList days={this.state.days} />
            </div>
        );
    }
}
