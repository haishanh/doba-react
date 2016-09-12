import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Search from '../components/Search';
import { fetchInTheaters } from '../actions';

class InTheaters extends Component {

  componentDidMount = () => {
    this.request = this.props.fetchInTheaters();
  }

  componentWillUnMount = () => {
    this.request.abort();
  }

  render = () => {
    if (this.props.isFetching) return <Loading />;

    return (
      <div>
        <div className="intheater title">正在上映的电影</div>
        <MovieList subjects={this.props.subjects} inlineTitle />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    subjects: state.subjects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInTheaters: () => dispatch(fetchInTheaters()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InTheaters);
