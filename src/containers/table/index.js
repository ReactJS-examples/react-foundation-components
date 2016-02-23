import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';

export default class Table extends Component {
  static propTypes = {
    className: PropTypes.string,
    hover: PropTypes.bool,
    scroll: PropTypes.bool,
    stack: PropTypes.bool,
  };

  render() {
    const { className, hover, scroll, stack } = this.props;
    const classNames = cx(
      className,
      {
        [styles.hover]: hover,
        [styles.scroll]: scroll,
        [styles.stack]: stack,
      }
    );

    return (
      <table {...this.props} className={classNames}/>
    );
  }
}
