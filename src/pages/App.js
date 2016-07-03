import React from 'react';

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Movies</h1>
            {this.props.children}
          </div>
        );
    }
}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
