import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from "react-redux";

class TestPageComponent extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>TestPage</Text>
        </View>
        );
    }
}

export default TestPage = connect()(TestPageComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});