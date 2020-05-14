import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import { signupUser } from '../actions';
import TopNavBar from './top_navbar';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  onInputChangeHandler = (event) => {
    const name = event.target.getAttribute('name');
    const inputValue = event.target.value;

    this.setState(() => ({
      [name]: inputValue,
    }));
  };

  submitSignUp = (event) => {
    const { email } = this.state;
    const { password } = this.state;
    this.props.signupUser({ email, password }, this.props.history);
    event.preventDefault();
  }

  render() {
    const {
      name, email, password,
    } = this.state;

    return (
      <div>
        <TopNavBar page="sign-up" />
        <CardDeck className="post-detail">
          <Card className="my-card" bg="light">
            <Card.Body>
              <Form onSubmit={this.submitSignUp}>
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

export default connect(null, { signupUser })(SignUp);
