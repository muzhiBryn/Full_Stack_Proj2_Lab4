import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { signoutUser } from '../actions';

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut = () => {
    this.props.signoutUser(this.props.history);
  }

  render() {
    let signUplink, signInlink, signOutLink,
      signUpActive, signInActive;
    console.log(this.props);
    if (this.props.page === 'sign-in') {
      signInActive = true;
    }
    if (this.props.page === 'sign-up') {
      signUpActive = true;
    }
    if (!this.props.authenticated) {
      signUplink = <Nav.Link href="/sign-up" active={signUpActive}>sign-up</Nav.Link>;
      signInlink = <Nav.Link href="/sign-in" active={signInActive}>sign-in</Nav.Link>;
    } else {
      signOutLink = <Nav.Link onClick={this.signOut}>sign-out</Nav.Link>;
    }

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">DartPost</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav variant="pills">
              {signInlink}
              {signUplink}
              {signOutLink}
              <Nav.Link href="/new"><i className="fas fa-plus-circle" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


const mapStateToProps = (rootReducer) => ({
  authenticated: rootReducer.auth.authenticated,
});

export default connect(mapStateToProps, { signoutUser })(TopNavBar);
