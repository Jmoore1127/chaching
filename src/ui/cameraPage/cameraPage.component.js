import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class CameraPage extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>CameraPage</Text>
        </View>
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