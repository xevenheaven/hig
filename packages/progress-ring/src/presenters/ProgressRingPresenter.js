import React, { Component } from "react";
import PropTypes from "prop-types";
// import cx from "classnames";

// import "./ButtonPresenter.scss";
import Medium from "../progress-ring-m.svg";

export default class ProgressRingPresenter extends Component {
  static propTypes = {
  /**
   * An integer from 0 to 100 representing the percent the delayed operation has completed
   */
  percentComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * {xs, s, m, l} the size of the progress indicator
   */
  // size: PropTypes.oneOf(ProgressRing.AvailableSizes)
  size: PropTypes.string
  };

  constructor(props) {
    super(props);

    // this.startTime = undefined;
    // this.el.classList.add('hig__progress-ring--determinate');
    console.log('Progress Ring Presenter');
    console.log(props);
  }

  /** @type {HTMLDivElement} */
    containerRef;

    /**
     * @param {HTMLDivElement} containerRef
     */
    refContainer = containerRef => {
      this.containerRef = containerRef;
    };

  /* static defaultProps = {
    checked: false,
    disabled: false
  }; */

  handleClick = () => {
    console.log(this.containerRef);
  }
 
  render() {
    /* const { checked, disabled } = this.props;

    const iconClasses = cx([
      "hig__radio-button__wrapper",
      {
        "hig__radio-button__wrapper--checked": checked,
        "hig__radio-button__wrapper--disabled": disabled
      }
    ]);

    return (
      <span className={iconClasses}>
        <span className="hig__radio-button__wrapper__button" />
        <span className="hig__radio-button__wrapper__button--disabled" />
      </span>
    ); */

    
    return (
      <div className="hig__progress-ring" role="progressbar" aria-valuemin="0" aria-valuemax="100" ref={this.refContainer}>

        <Medium onClick={() => this.handleClick()} />
      </div>
    );
  }
}
