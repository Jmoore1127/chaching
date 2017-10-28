import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Footer, FooterTab} from "native-base";
import {Actions as RouterActions} from 'react-native-router-flux';
import {connect} from "react-redux";

class NavFooterComponent extends React.Component {
    render() {
        const {onNewPressed, onApprovePressed, onExpensesPressed, onAccountsPressed } = this.props;
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={onNewPressed}>
                        {/*<Icon></Icon>*/}
                        <Text>New</Text>
                    </Button>
                    <Button vertical onPress={onExpensesPressed}>
                        {/*<Icon></Icon>*/}
                        <Text>Expenses</Text>
                    </Button>
                    <Button vertical onPress={onApprovePressed}>
                        {/*<Icon></Icon>*/}
                        <Text>Approve</Text>
                    </Button>
                    <Button vertical onPress={onAccountsPressed}>
                        {/*<Icon></Icon>*/}
                        <Text>Accounts</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default NavFooter = connect(() => ({}), () => ({
    onNewPressed: () => RouterActions.new_expense(),
    onApprovePressed: () => RouterActions.approve_expenses(),
    onExpensesPressed: () => RouterActions.expenses(),
    onAccountsPressed: () => RouterActions.accounts()
}))(NavFooterComponent);
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });