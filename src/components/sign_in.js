import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Alert from 'react-bootstrap/Alert';
import { signinUser } from '../actions';
import TopNavBar from './top_navbar';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.submitSignIn = this.submitSignIn.bind(this);
  }

  onInputChangeHandler = (event) => {
    const name = event.target.getAttribute('name');
    const inputValue = event.target.value;

    this.setState(() => ({
      [name]: inputValue,
    }));
  };

  submitSignIn = (event) => {
    const { email } = this.state;
    const { password } = this.state;
    this.props.signinUser({ email, password }, this.props.history);
    event.preventDefault();
  }

  render() {
    const {
      name, email, password,
    } = this.state;

    let errMsgDiv;
    if (this.props.err_msg) {
      errMsgDiv = <Alert variant="danger"> {this.props.err_msg} <br />Check your Email and Password! </Alert>;
    }
    return (
      <div>
        <TopNavBar page="sign-in" />

        <CardDeck className="post-detail">
          <Card className="my-card" bg="light">
            <Card.Body>
              {errMsgDiv}
              <Form onSubmit={this.submitSignIn}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"
                    placeholder="Enter name"
                    name="name"
                    onChange={(e) => this.onInputChangeHandler(e)}
                    value={name}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => this.onInputChangeHandler(e)}
                    value={email}
                  />
                  <Form.Text className="text-muted">
                    This will be shown at the bottom of the post.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => this.onInputChangeHandler(e)}
                    value={password}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>

          </Card>
        </CardDeck>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => ({
  err_msg: rootReducer.auth.err_msg,
});

export default connect(mapStateToProps, { signinUser })(SignIn);
