import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/login';
import { Dashboard } from './components/dashboard';
import { Settings } from './components/settings';
import { ProtectedRoute } from './ProtectedRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact={true} path="/" component={Dashboard} />
        <ProtectedRoute path="/setting" component={Settings} />
        <ProtectedRoute component={Dashboard} />
      </Switch>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
