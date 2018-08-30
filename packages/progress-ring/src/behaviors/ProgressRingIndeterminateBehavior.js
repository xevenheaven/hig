/* progress-ring-indeterminate behavior */
import { Component } from "react";
import PropTypes from "prop-types";

const CYCLE_DURATION = 1000;
const FADE_DURATION = 416;

export default class ProgressRingDeterminateBehavior extends Component {
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

    this.startTime = undefined;
    // this.el.classList.add('hig__progress-ring--determinate');
    console.log('Indeterminate Behavior');
    console.log(document.querySelectorAll('.hig__progress-ring__segment'));
    console.log(props);
  }

  initSegments() {

  }

  render() {

    return this.props.children;
  }
}

/* 
class ProgressRingIndeterminate {
  constructor(el) {
    this.startTime = undefined;
    this.el = el;
    this.initSegments();

    this.step(1);

    this.containerAnimation = new CSSTransition({
      el: this.el,
      class: 'hig__progress-ring',
      enteringDuration: 650,
      exitingDuration: 466
    });
    this.containerAnimation.enter();
  }

  initSegments() {
    this.segments = Array.from(this.el.querySelectorAll('.hig__progress-ring__segment'));

    this.SEGMENT_COUNT = this.segments.length;
    this.SEGMENT_DELAY_FACTOR = CYCLE_DURATION / this.SEGMENT_COUNT;
  }

  step = (timestamp) => {
    if (!this.playing) { return; }
    if (!this.containerAnimation.isEntered()) {
      window.requestAnimationFrame(this.step);
      return;
    }

    if (!this.startTime) this.startTime = timestamp;
    const elapsed = timestamp - this.startTime;
    const elapsedThisCycle = elapsed % CYCLE_DURATION;

    this.setSegmentOpacities(elapsedThisCycle);

    window.requestAnimationFrame(this.step);
  }

  setSegmentOpacities(elapsedThisCycle) {
    this.segments.forEach((segment, i) => {
      const index = Math.abs(i - this.SEGMENT_COUNT) - 1;

      segment.style.opacity = this.opacityForSegment(index, elapsedThisCycle);
    });
  }

  opacityForSegment(index, elapsedThisCycle) {
    const segmentFadeStartTime = index * this.SEGMENT_DELAY_FACTOR;

    // Fade continuing from previous cycle
    if (segmentFadeStartTime + FADE_DURATION > CYCLE_DURATION && elapsedThisCycle < FADE_DURATION) {
      return ((((elapsedThisCycle + CYCLE_DURATION) - segmentFadeStartTime) / FADE_DURATION) - 1) * -1;
    }

    // Fade has finished
    if (elapsedThisCycle < segmentFadeStartTime || elapsedThisCycle > segmentFadeStartTime + FADE_DURATION) {
      return 0;
    }

    // Fading
    return Math.abs(((elapsedThisCycle - segmentFadeStartTime) / FADE_DURATION) - 1);
  }

  start() {
    this.playing = true;
    this.startTime = undefined;
    window.requestAnimationFrame(this.step);
  }

  stop() {
    this.playing = false;
    window.cancelAnimationFrame(this.step);
    this.containerAnimation.stop();
  }

  forceReset() {
    this.initSegments();
    this.step(Date.now());
  }
} */