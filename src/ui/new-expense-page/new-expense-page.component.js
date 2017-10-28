import React from 'react';
// import {StyleSheet} from 'react-native';
import {Button, Container, Content, Form, Input, Item, Text} from "native-base";
import {Actions as RouterActions} from 'react-native-router-flux';
import NavHeader from "../nav-header/nav-header.component";
import NavFooter from "../nav-footer/nav-footer.component";
import {connect} from "react-redux";

class NewExpensePageComponent extends React.Component {
    render() {
        const {onAddExpense} = this.props;
        return (
            <Container>
                <NavHeader title="New Expense"/>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Summary"/>
                        </Item>
                        <Item>
                            <Input placeholder="Amount" keyboardType="numeric" />
                        </Item>
                        <Item>
                            <Input placeholder="Notes" multiline/>
                        </Item>
                    </Form>
                    <Button block onPress={onAddExpense}>
                        <Text>Add Expense</Text>
                    </Button>
                </Content>
                <NavFooter/>
            </Container>
        );
    }
}

export default NewExpensePage = connect(() => ({}), () => ({onAddExpense: () => RouterActions.expenses()}))(NewExpensePageComponent)

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });