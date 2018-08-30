import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';
// import { CSSTransitionGroup } from '../node_modules/react-transition-group'

// import { ProgressRing } from "hig-react";
import ProgressRingIndeterminateBehavior from "./behaviors/ProgressRingIndeterminateBehavior";
import ProgressRingPresenter from "./presenters/ProgressRingPresenter"
import "./progress-ring.scss";

// ProgressRing.displayName = "ProgressRing";

// export default ProgressRing;

export default class ProgressRing extends Component {
	/** @type {HTMLDivElement} */
	  containerRef;

	  /**
	   * @param {HTMLDivElement} containerRef
	   */
	  refContainer = containerRef => {
	    this.containerRef = containerRef;
	  };
	constructor(props) {
		super(props);

		this.setSVGNode = this.setSVGNode.bind(this);
		this.svgNode = undefined;
	}

	setSVGNode(node) {
		this.svgNode = node.querySelectorAll('.hig__progress-ring__segment');
		console.log(this.svgNode);
	}

	render() {

		return (
			<CSSTransition
				in={true}
				timeout={5500}
				appear={true}
				classNames="fade"
				onEnter={(node) => {console.log(node)}}
				onEntering={(state) => {console.log(state.classList) }}
				onEntered={this.setSVGNode}
				animatedNode={this.svgNode}
				>
				<ProgressRingIndeterminateBehavior>
					<ProgressRingPresenter />
				</ProgressRingIndeterminateBehavior>
			</CSSTransition>
		);
	}
}
