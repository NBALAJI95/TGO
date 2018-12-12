import React from 'react';

export default class inventory extends React.Component {
  static async getInitialProps({ query }) {
    // query.slug
    console.log('Query', query);
    return query;
  }

  render() {
    // this.props.url.query.slug
    console.log('Inv!', this.props);
    return (
      <h1> Inventory! </h1>
    );
  }
}
