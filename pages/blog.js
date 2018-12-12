import React from 'react';

export default class Blog extends React.Component {
  static async getInitialProps({ query }) {
    // query.slug
    console.log('Query', query);
    return query;
  }

  render() {
    // this.props.url.query.slug
    console.log('AWWW!', this.props);
    return (
      <h1> Blog! </h1>
    );
  }
}
