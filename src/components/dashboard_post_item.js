import React from 'react';
import Card from 'react-bootstrap/Card';
// import NavLink from 'react-router-dom';

const DashboardPostItem = (props) => {
  return (
    <Card className="my-card">
      <a href={`/post/${props.post.id}`}>
        <Card.Body>
          <img src={props.post.coverUrl} alt="" />
          <Card.Title>
            { props.post.title }
          </Card.Title>
          <Card.Text>
            { props.post.tags }
          </Card.Text>
        </Card.Body>
      </a>

    </Card>
  );
};

export default DashboardPostItem;
