import React from 'react';
import {connect, Provider} from 'react-redux';
import {Router, Scene, Stack} from 'react-native-router-flux'
import Home from './home/home.component';
import Test from './test-page/test-page.component';
import {store} from "../core/";

const ConnectedRouter = connect()(Router);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                    <ConnectedRouter>
                        <Stack key="root">
                            <Scene key="home" component={Home} title="Home" initial={true}/>
                            <Scene key="test" component={Test} title="Test" />
                        </Stack>
                    </ConnectedRouter>
            </Provider>
        );
    }
}