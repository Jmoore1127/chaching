import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {NativeRouter} from 'react-router-native'
import {Redirect, Route, Switch} from "react-router";
import Home from './home/home.component';
import Test from './test-page/test-page.component';
import {store} from "../core/";


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <NativeRouter>
                        <Switch>
                            <Route component={Home} path="/" />
                            <Route component={Test} path="/test" />
                            <Redirect to="/" />
                        </Switch>
                    </NativeRouter>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
