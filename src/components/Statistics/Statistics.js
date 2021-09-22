//import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Insert } from './Statistics.styled';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, percentage } = this.props;
    return (
      <ul>
        <li>
          <Insert>Good: {good}</Insert>
        </li>
        <li>
          <Insert>Neutral: {neutral}</Insert>
        </li>
        <li>
          <Insert>Bad: {bad}</Insert>
        </li>
        <li>
          <Insert>Total: {total}</Insert>
        </li>
        <li>
          <Insert>Positive feedback: {percentage} %</Insert>
        </li>
      </ul>
    );
  }
}
