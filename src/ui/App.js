import React from 'react';
import {connect, Provider} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux'
import Home from './home/home.component';
import {store} from "../core/";
import DashboardPage from "./dashboard-page/dashboard-page.component";
import NewExpensePage from "./new-expense-page/new-expense-page.component";
import ExpensesPage from "./expenses-page/expenses-page.component";

const ConnectedRouter = connect()(Router);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                    <ConnectedRouter>
                        <Scene key="root">
                            <Scene key="home" component={Home} initial={true} hideNavBar={true} hideBackImage={true}/>
                            <Scene key="dashboard" component={DashboardPage} hideNavBar={true} hideBackImage={true} />
                            <Scene key="expenses" component={ExpensesPage} hideNavBar={true} hideBackImage={true} />
                            <Scene key="new_expense" component={NewExpensePage} hideNavBar={true} hideBackImage={true} />
                            <Scene key="approve_expenses" component={DashboardPage} hideNavBar={true} hideBackImage={true} />
                            <Scene key="accounts" component={DashboardPage} hideNavBar={true} hideBackImage={true} />
                        </Scene>
                    </ConnectedRouter>
            </Provider>
        );
    }
}