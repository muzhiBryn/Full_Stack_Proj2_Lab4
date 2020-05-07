import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardDeck from 'react-bootstrap/CardDeck';
import TextareaAutosize from 'react-textarea-autosize';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import marked from 'marked';
import { fetchPost, updatePost, deletePost } from '../actions';


class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      tags: null,
      content: null,
      coverUrl: null,
      isEditing: false,
    };
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    this.saveAndBack = this.saveAndBack.bind(this);
    this.deleteThisPost = this.deleteThisPost.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.props.match.params.id);
    this.props.fetchPost(this.props.match.params.id);
  }

  toggleEditing = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  }

  onInputChangeHandler = (event) => {
    const name = event.target.getAttribute('name');
    const inputValue = event.target.value;

    this.setState(() => ({
      [name]: inputValue,
    }));
  };

  saveAndBack = () => {
    let title, tags, content, coverUrl;
    if (this.props.post) {
      title = this.state.title ? this.state.title : this.props.post.title;
      tags = this.state.tags ? this.state.tags : this.props.post.tags;
      content = this.state.content ? this.state.content : this.props.post.content;
      coverUrl = this.state.coverUrl ? this.state.coverUrl : this.props.post.coverUrl;
    }
    console.log(title, tags, content, coverUrl);
    this.props.updatePost(this.props.match.params.id, {
      title,
      tags,
      content,
      coverUrl,
    }, this.props.history);
  }

  deleteThisPost = () => {
    this.props.deletePost(this.props.match.params.id, this.props.history);
  }

  render() {
    let title, tags, content, coverUrl,
      editButton, titleDiv, tagsDiv, coverUrlDiv, contentDiv;
    if (this.props.post) {
      title = this.state.title != null ? this.state.title : this.props.post.title;
      tags = this.state.tags != null ? this.state.tags : this.props.post.tags;
      content = this.state.content != null ? this.state.content : this.props.post.content;
      coverUrl = this.state.coverUrl != null ? this.state.coverUrl : this.props.post.coverUrl;
    }

    if (this.state.isEditing) {
      editButton = <Button onClick={this.toggleEditing}><i className="fas fa-check" /></Button>;
      titleDiv = (
        <TextareaAutosize
          name="title"
          onChange={(e) => this.onInputChangeHandler(e)}
          value={title}
        />
      );
      tagsDiv = (
        <TextareaAutosize
          name="tags"
          onChange={(e) => this.onInputChangeHandler(e)}
          value={tags}
        />
      );
      contentDiv = (
        <TextareaAutosize className="content-area"
          name="content"
          onChange={(e) => this.onInputChangeHandler(e)}
          value={content}
        />
      );
      coverUrlDiv = (
        <TextareaAutosize
          name="coverUrl"
          onChange={(e) => this.onInputChangeHandler(e)}
          value={coverUrl}
        />
      );
    } else {
      editButton = <Button onClick={this.toggleEditing}><i className="fas fa-pencil-alt" /></Button>;
      titleDiv = <div>{title}</div>;
      tagsDiv = <div>{tags}</div>;
      contentDiv = <div dangerouslySetInnerHTML={{ __html: marked(content || '') }} />;
      coverUrlDiv = <span>{coverUrl}</span>;
    }

    return (
      <div>
        <CardDeck className="post-detail">
          <Card>
            <Card.Body>
              <div>
                <Button onClick={this.saveAndBack}><i className="fas fa-arrow-circle-left" /></Button>
                <Button onClick={this.deleteThisPost}><i className="far fa-trash-alt" /></Button>
                {editButton}

              </div>
              <Card.Title>
                {titleDiv}
              </Card.Title>
              Tag:
              <div>
                {tagsDiv}
              </div>
              Content:
              <div>
                {contentDiv}
              </div>
              URL:
              <div>
                {coverUrlDiv}
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}


const mapStateToProps = (rootReducer) => ({
  post: rootReducer.posts.selected_post,
});

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(PostDetail);
