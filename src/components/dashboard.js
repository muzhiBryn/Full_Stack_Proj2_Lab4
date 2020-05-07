import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardPosts from './dashboard_posts';
import { fetchPosts } from '../actions';
import TopNavBar from './top_navbar';


class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <TopNavBar />
        <div className="dashboard-posts">
          <DashboardPosts />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(Dashboard);
