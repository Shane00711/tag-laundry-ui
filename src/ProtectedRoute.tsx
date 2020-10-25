import React from 'react'
import { Redirect } from 'react-router-dom';

export const ProtectedRoute  = (prop: any) => {
    const Component = prop.component;
    const isAuthenticated = localStorage.getItem('token');
    return (isAuthenticated ? <Component /> : <Redirect to={{pathname: '/login'}} />);
}
