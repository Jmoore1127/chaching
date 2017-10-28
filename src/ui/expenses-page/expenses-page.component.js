import React from 'react';
import { StyleSheet } from 'react-native';
import {Card, CardItem, Container, Content, Icon, Text} from "native-base";
import NavHeader from "../nav-header/nav-header.component";
import {connect} from "react-redux";

const expenses = [
    {
        id: 1,
        summary: "This was an expense",
        location: "Smith's",
        amount: 23.22,
        approved: false,
        date: '2017-10-01'
    },
    {
        id: 2,
        summary: "Give me my money back!",
        location: "Best Buy",
        amount: 1123.22,
        approved: false,
        date: '2017-10-02'
    },
    {
        id: 3,
        summary: "I got hungry...",
        location: "Wendy's",
        amount: 25.01,
        approved: true,
        date: '2017-10-03'
    }
];

class ExpensesPageComponent extends React.Component {

    render() {
        //const {expenses} = this.props;

        return (
        <Container>
            <NavHeader title="Expense History" />
            <Content>
                { expenses && expenses.map(expense => (
                    <Card key={expense.id}>
                        <CardItem header>
                            <Text>{expense.summary}</Text><Text>{expense.date}</Text>
                        </CardItem>
                        <CardItem>
                            <Text>${expense.amount.toFixed(2)}</Text>{expense.approved && <Icon ios="ios-checkmark" android="md-checkmark" /> }
                        </CardItem>
                    </Card>
                ))}
            </Content>
            <NavFooter />
        </Container>
        );
    }
}

export default ExpensesPage = connect(() => ({}), () => ({}))(ExpensesPageComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});