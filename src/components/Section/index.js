import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Title from '../Title';
import Tabs from './Components/Tabs';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleId: PropTypes.string,
    data: PropTypes.arrayOf
  }
  static defaultProps = {
    title: '',
    titleId: '',
    data: [],

  }
  render() {
    return (
      <React.Fragment>
        <Title title={this.props.title} titleId={this.props.titleId} type='section' />
        <Tabs data={this.props.data} />
      </React.Fragment>
    )
  }
}

export default Section;