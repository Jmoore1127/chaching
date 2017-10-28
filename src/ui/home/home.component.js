import React from 'react';
import {Actions as RouterActions} from 'react-native-router-flux';
import {connect} from "react-redux";
import {Body, Button, Container, Content, Form, Header, Input, Item, Text, Title} from "native-base";

class HomeComponent extends React.Component {
    render() {
        const {onTestPressed} = this.props;
        return (
        <Container>
            <Header>
                <Body>
                    <Title>Welcome!</Title>
                </Body>
            </Header>
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Email" />
                    </Item>
                    <Item>
                        <Input placeholder="Password" />
                    </Item>
                </Form>
                <Button block onPress={onTestPressed}>
                    <Text>Login</Text>
                </Button>
            </Content>
        </Container>
        );
    }
}

export default Home = connect(
    (state) => ({

    }),
    () => ({
        onTestPressed: () => {
            return RouterActions.dashboard();
        }
    }))(HomeComponent);

