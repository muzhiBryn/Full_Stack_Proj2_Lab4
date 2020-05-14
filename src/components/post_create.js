import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardDeck from 'react-bootstrap/CardDeck';
import TextareaAutosize from 'react-textarea-autosize';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { createPost } from '../actions';
import TopNavBar from './top_navbar';


class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.saveAndBack = this.saveAndBack.bind(this);
    this.withoutSaveAndBack = this.withoutSaveAndBack.bind(this);
  }

  onInputChangeHandler = (event) => {
    const name = event.target.getAttribute('name');
    const inputValue = event.target.value;

    this.setState(() => ({
      [name]: inputValue,
    }));
  };

  saveAndBack = () => {
    const {
      title, tags, content, coverUrl,
    } = this.state;

    console.log(title, tags, content, coverUrl);
    this.props.createPost({
      title,
      tags,
      content,
      coverUrl,
    }, this.props.history);
  }

  withoutSaveAndBack = () => {
    window.open('/');
  }

  render() {
    const {
      title, tags, content, coverUrl,
    } = this.state;

    return (
      <div>
        <TopNavBar />
        <CardDeck className="post-detail">
          <Card className="my-card" bg="light">
            <Card.Body>
              <Card.Title>
                Create A New Post
              </Card.Title>
              Title:
              <div>
                <TextareaAutosize
                  name="title"
                  onChange={(e) => this.onInputChangeHandler(e)}
                  value={title}
                />
              </div>

              Tag:
              <div>
                <TextareaAutosize
                  name="tags"
                  onChange={(e) => this.onInputChangeHandler(e)}
                  value={tags}
                />
              </div>
              Content:
              <div>
                <TextareaAutosize className="content-area"
                  name="content"
                  onChange={(e) => this.onInputChangeHandler(e)}
                  value={content}
                />
              </div>
              URL:
              <div>
                <TextareaAutosize
                  name="coverUrl"
                  onChange={(e) => this.onInputChangeHandler(e)}
                  value={coverUrl}
                />
              </div>
              <div>
                <Button onClick={this.saveAndBack}><i className="far fa-save" /></Button>
                <Button onClick={this.withoutSaveAndBack}><i className="far fa-trash-alt" /></Button>
              </div>
            </Card.Body>

          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostCreate);
