import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Body, Card, CardItem, Container, Content, Footer, FooterTab, H1, Header, Title} from "native-base";
import NavFooter from "../nav-footer/nav-footer.component";
import NavHeader from "../nav-header/nav-header.component";
import {selectShouldDisableBackButton} from "../../core/selectors/router.selectors";
import {connect} from "react-redux";

class DashboardPageComponent extends React.Component {
    render() {
        const accountBalance = 0;
        const pendingBalance = 0;
        const {disableBack} = this.props;
        return (
            <Container>
                <NavHeader title="Dashboard" disableBack={disableBack}/>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Account Balance</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Balance: $ {accountBalance.toFixed(2)}</Text>
                            <Text>Pending Approval: $ {pendingBalance.toFixed(2)}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Pending Expenses</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Expense 1</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Expense 2</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Expense 3</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <NavFooter/>
            </Container>
        );
    }
}

export default DashboardPage = connect(
    (state) => ({
        disableBack: selectShouldDisableBackButton(state)
    }),
    () => ({}))(DashboardPageComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});