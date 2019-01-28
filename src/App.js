import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/login';
import NotfoundContainer from './containers/Notfound';
import NavigationContainer from './containers/navigation';
import MetricsContainer from './containers/metrics';
import ReportPortalContainer from './containers/reportportal';
import AdminUsersContainer from './containers/users';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/admin/metrics" />
  },
  {
    path: '/admin',
    exact: true,
    component: () => <Redirect to="/admin/metrics" />
  },
  {
    path: '/admin/metrics',
    exact: false,
    component: () => <MetricsContainer/>
  },
  {
    path: '/admin/reports',
    exact: false,
    component: () => <ReportPortalContainer/>
  },
  {
    path: '/admin/admin-users',
    exact: false,
    component: () => <AdminUsersContainer/>
  },

]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route
      path="/admin/"
      exact= {false}
      component={NavigationContainer}
      />
          <Switch>
            <Route path='/login' component={LoginContainer}/>
            
            {routes.map((e,i) => (

                <Route 
                  key={i}
                  path={e.path}
                  exact={e.exact}
                  component={e.component}
                />
            )
            )}
          
            <Route component={NotfoundContainer} />
          </Switch>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
 