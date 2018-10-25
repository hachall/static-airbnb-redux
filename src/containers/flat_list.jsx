import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from '../containers/flat';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

class FlatList extends Component {
  static defaultProps = {
    flats: [{
      "name": "Charm at the Steps of Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
  }

  render() {
    return (
      <div className=" flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    );
  }
}

export default connect()(FlatList);
