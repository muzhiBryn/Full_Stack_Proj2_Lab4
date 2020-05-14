/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

// Router Wrapper
const PrivateRoute = ({ component: Child, ...props }) => {
// some stuff goes here
  return (
    <Route
      {...props}
      render={(routeProps) => (props.authenticated ? (
        <Child {...routeProps} />
      ) : (
        <Redirect to="/sign-in" />
      ))}
    />
  );
};

const mapStateToProps = (rootReducer) => ({
  authenticated: rootReducer.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
