import React, { Component } from "react";
import PropTypes from "prop-types";
import ModulePresenter from "./presenters/ModulePresenter";

export default class Module extends Component {
  static propTypes = {
    /** Indicates this module is currently active */
    active: PropTypes.bool,
    /** Indicates a nested submodule is currently active */
    activeChildren: PropTypes.bool,
    /** Zero or more SideNav submodules */
    children: PropTypes.node,
    /** An instance of @hig/icon */
    icon: PropTypes.node,
    /** URL to navigate to when clicking this module */
    link: PropTypes.string,
    /** Default uncontrolled state of `minimized` */
    defaultMinimized: PropTypes.bool,
    /** Indicates whether to display nested submodules */
    minimized: PropTypes.bool,
    /** Called when clicking on the collapse button */
    onClickCollapseButton: PropTypes.func,
    /** Called when clicking on the title */
    onClickTitle: PropTypes.func,
    /** Called when the submodules are visible */
    onExpand: PropTypes.func,
    /** Called when the submodules are hidden */
    onMinimize: PropTypes.func,
    /** Called when hovering over the title */
    onMouseOver: PropTypes.func,
    /** A label for rendering this Module */
    title: PropTypes.string.isRequired,
    /** Anchor target. Applicable only if link is provided */
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"])
  };

  static defaultProps = {
    defaultMinimized: false
  };

  state = {
    minimized: this.props.defaultMinimized
  };

  /**
   * @param {Function} callback
   */
  setMinimize(minimized, callback) {
    const { onExpand, onMinimize } = this.props;

    if (minimized && onMinimize) {
      onMinimize();
    } else if (!minimized && onExpand) {
      onExpand();
    }

    this.setState({ minimized }, callback);
  }

  isMinimizedControlled() {
    return this.props.minimized !== undefined;
  }

  isMinimized() {
    return this.isMinimizedControlled()
      ? this.props.minimized
      : this.state.minimized;
  }

  /**
   * @param {Function} callback
   */
  toggleMinimize(callback) {
    this.setMinimize(!this.state.minimized, callback);
  }

  /**
   * @param {function(): function} getHandler
   * @returns {function(MouseEvent): void}
   */
  createMinimizeToggler(getHandler) {
    return () => {
      const handler = getHandler();

      if (this.isMinimizedControlled()) {
        handler();
      } else {
        this.toggleMinimize(handler);
      }
    };
  }

  /**
   * @param {MouseEvent} event
   */
  handleClickCollapseButton = this.createMinimizeToggler(
    () => this.props.onClickCollapseButton
  );

  /**
   * @param {MouseEvent} event
   */
  handleClickTitle = this.createMinimizeToggler(() => this.props.onClickTitle);

  render() {
    const {
      children,
      onClickCollapseButton,
      onClickTitle,
      ...otherProps
    } = this.props;
    const minimized = this.isMinimized();
    const { handleClickCollapseButton, handleClickTitle } = this;

    return (
      <ModulePresenter
        minimized={minimized}
        onClickCollapseButton={handleClickCollapseButton}
        onClickTitle={handleClickTitle}
        {...otherProps}
      >
        {children}
      </ModulePresenter>
    );
  }
}
