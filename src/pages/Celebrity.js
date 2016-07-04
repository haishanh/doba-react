import React from 'react';
import request from 'reqwest'

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
        <li key={idx}><img src={work.subject.images.medium} /></li>
      );
    });

    return (
      <ul>{items}</ul>
    );
  }

  render = () => {
    let works = this.renderWorks(this.state.works);

    return (
      <div>
        <h2>{this.name} {this.name_en}</h2>
        <img src={this.state.avatar}/>
        <div>性别：{this.state.gender}</div>
        <div>出生地：{this.state.born_place}</div>
        <div><a href={this.state.alt}>豆瓣链接</a></div>
        {works}
      </div>
    );
  }
}

export default Celebrity;