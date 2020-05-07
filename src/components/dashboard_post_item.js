import React from 'react';
import Card from 'react-bootstrap/Card';
// import NavLink from 'react-router-dom';

const DashboardPostItem = (props) => {
  return (
    <Card className="my-card">

      <Card.Body>
        <img src={props.post.coverUrl} alt="" />
        <Card.Title>
          <a href={`/post/${props.post.id}`}> { props.post.title } </a>
        </Card.Title>
        <Card.Text>
          <a href={`/post/${props.post.id}`}> { props.post.tags } </a>
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default DashboardPostItem;
