import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BtnList, Item, Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  getRandom = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  render() {
    return (
      <BtnList>
        {this.props.options.map(el => {
          return (
            <Item key={el}>
              <Button
                type="button"
                name={el}
                onClick={this.props.onLeaveFeedback}
              >
                {el}
              </Button>
            </Item>
          );
        })}
      </BtnList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
