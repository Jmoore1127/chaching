import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {push} from 'react-router-redux';
import {connect} from "react-redux";

class HomeComponent extends React.Component {
    render() {
        const {onTestPressed} = this.props;
        return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button onPress={onTestPressed} title="Test2"/>
        </View>
        );
    }
}

export default Home = connect(
    (state) => ({

    }),
    () => ({
        onTestPressed: () => {
            return push("/test");
        }
    }))(HomeComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});