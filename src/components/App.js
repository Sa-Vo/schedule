import React, { Component } from 'react';
import Layout from './Layout';
import Tabs from './Tabs/Tabs';
import tabs from '../tabs.json';

export default class App extends Component {
    state = {};

    render() {
        return (
            <Layout>
                <Tabs items={tabs} />
            </Layout>
        );
    }
}
