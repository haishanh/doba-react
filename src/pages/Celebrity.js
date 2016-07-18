import React from 'react';
import { Link } from 'react-router';
import request from 'reqwest';

import Loading from '../components/Loading';
import Icon from '../components/icon';

class Celebrity extends React.Component {

  state = {
    avatar: '',
    alt: '',
    name: '',
    name_en: '',
    gender: '',
    born_place: '',
    works: []
  }

  componentWillMount = () => {
    let baseURL = 'https://api.douban.com/v2/movie/celebrity/';

    request({
      url: baseURL + this.props.params.id,
      type: 'jsonp'
    })
    .then(res => {
      console.dir(res);
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
  }

  renderWorks = (works) => {
    let items = works.map((work, idx) => {
      return (
        <div key={idx}>
          <Link to={'subject/' + work.subject.id}>
            <img src={work.subject.images.medium} />
            <div>{work.subject.title}</div>
          </Link>
        </div>
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
  }

  render = () => {
    if (!this.state.name) return <Loading />;

    let works = this.renderWorks(this.state.works);

    return (
      <div className="celebrity-page">
        <div className="content-title">{this.state.name + ' ' + this.state.name_en}</div>
        <div className="celebrity-profile">
          <div className="celebrity-image">
            <img src={this.state.avatar}/>
          </div>
          <div className="celebrity-info">
            <div>{'性别：' + this.state.gender}</div>
            <div>{'出生地：' + this.state.born_place}</div>
            <div>
              <a href={this.state.alt}>
                <div className="douban-link"><Icon name="douban" /></div>
              </a>
            </div>
          </div>
        </div>
        {works}
      </div>
    );
  }
}

export default Celebrity;