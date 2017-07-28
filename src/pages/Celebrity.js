import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'reqwest';

import Rating from '../components/Rating';
import Loading from '../components/Loading';
import Icon from '../components/Icon';
import doban from '../svg/douban.svg';

class Celebrity extends Component {
  state = {
    avatar: '',
    alt: '',
    name: '',
    name_en: '',
    gender: '',
    born_place: '',
    works: []
  };

  componentWillMount = () => {
    this.fetchCelebrity();
  };

  componentDidUpdate = prevProps => {
    let oldId = prevProps.match.params.id;
    let newId = this.props.match.params.id;
    if (newId !== oldId) this.fetchCelebrity();
  };

  componentWillUnMount = () => {
    this.request.abort();
  };

  fetchCelebrity = () => {
    let baseURL = 'https://api.douban.com/v2/movie/celebrity/';

    this.request = request({
      url: baseURL + this.props.match.params.id,
      type: 'jsonp'
    })
      .then(res => {
        this.setState({
          avatar: res.avatars.large,
          alt: res.alt,
          name: res.name,
          name_en: res.name_en,
          gender: res.gender,
          born_place: res.born_place,
          works: res.works
        });
      })
      .fail((err, msg) => {
        console.log(err, msg);
      });
  };

  renderWorks = works => {
    let items = works.map((work, idx) => {
      return (
        <Link key={idx} to={'/subject/' + work.subject.id} className="work">
          <div
            className="work__cover"
            style={{
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img
              src={work.subject.images.medium}
              style={{
                border: '4px solid #fff',
                borderColor: 'rgba(255,255,255,0.9)'
              }}
            />
            <div
              className="mask"
              style={{
                position: 'absolute',
                top: 0,
                left: 0
              }}
            >
              <svg
                width="428"
                height="600"
                viewBox="0 0 428 600"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: '100%',
                  height: '100%'
                }}
              >
                <path
                  d="M0 0h428v100.535C355.662 336.601 169.13 516.227 67.852 600H0V0z"
                  fill="#FFF"
                  fillRule="evenodd"
                  fillOpacity=".27"
                />
              </svg>
            </div>
          </div>
          <Rating
            rating={work.subject.rating}
            style={{ transform: 'scale(0.8)' /* sorry im cheating here */ }}
          />
          <span>
            {work.subject.title}
          </span>
        </Link>
      );
    });

    return (
      <div className="celebrity-works">
        <div className="title">作品</div>
        <div className="celebrity-works-flex">
          {items}
        </div>
      </div>
    );
  };

  render = () => {
    if (!this.state.name) return <Loading />;

    let works = this.renderWorks(this.state.works);

    return (
      <div className="celebrity-page">
        <div className="content-title">
          {this.state.name + ' ' + this.state.name_en}
        </div>
        <div className="celebrity-profile">
          <div className="celebrity-image">
            <img src={this.state.avatar} />
          </div>
          <div className="celebrity-info">
            <p>
              {'性别：' + this.state.gender}
            </p>
            <p>
              {'出生地：' + this.state.born_place}
            </p>
            <p>
              <a href={this.state.alt}>
                <span className="douban-link">
                  <Icon name={douban.id} />
                </span>
              </a>
            </p>
          </div>
        </div>
        {works}
      </div>
    );
  };
}

export default Celebrity;
