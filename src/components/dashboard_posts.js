import React from 'react';
import { connect } from 'react-redux';
import CardDeck from 'react-bootstrap/CardDeck';
import DashboardPostItem from './dashboard_post_item';

const DashboardPosts = (props) => {
  const decks = [];
  const numDecks = props.rdx_allposts.length / 3;
  console.log(props.rdx_allposts.length);
  console.log(props.rdx_allposts.length / 3);
  let i, j;
  for (i = 0; i < numDecks; i += 1) {
    const deck = [];
    for (j = 0; j < 3; j += 1) {
      if (i * 3 + j < props.rdx_allposts.length) {
        deck.push(<DashboardPostItem post={props.rdx_allposts[i * 3 + j]} />);
      }
    }
    decks.push(<CardDeck>{deck}</CardDeck>);
  }

  // for (const [index, post] of props.rdx_allposts.entries()) {
  //   let deck =
  //   decks.push(<DashboardPostItem post={post} />);
  // }


  return (
    <div>
      {decks}
    </div>

  );
};

const mapStateToProps = (rootReducer) => ({
  rdx_allposts: rootReducer.posts.all_posts,
});

export default connect(mapStateToProps, null)(DashboardPosts);
