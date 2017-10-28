import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";
import {Actions as RouterActions} from 'react-native-router-flux';
import {connect} from "react-redux";

class NavHeaderComponent extends React.Component {
    render() {
        const {goBack, title, disableBack} = this.props;
        return (
        <Header>
            {!disableBack &&
            <Left>
                <Button transparent onPress={goBack}>
                    <Icon ios="ios-arrow-back" android="md-arrow-back"/>
                </Button>
            </Left>
            }
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right/>
        </Header>
        );
    }
}

export default NavHeader = connect(() => ({}), () => ({
    goBack: () => RouterActions.pop()
}))(NavHeaderComponent);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });