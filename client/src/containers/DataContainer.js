import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames';
import gsap from 'gsap';
import { request } from '../actions'

import OpeningContainer from '../components/OpeningContainer/OpeningContainer';
import RankingContainer from '../components/RankingContainer/RankingContainer';
import PickupWordContainer from '../components/PickupWordContainer/PickupWordContainer';
import EndingContainer from '../components/EndingContainer/EndingContainer';

const seedrandom = require('seedrandom');

const shuffle = array => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


class SnippetsContainer extends Component {

  static propTypes = {
    data: PropTypes.object,
    request: PropTypes.func.isRequired,
  }

  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      actIndex: 0,
      isDataLoaded: false
    };
  }

  componentDidMount() {
    this.props.request()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const { data } = this.props;
    const { actIndex, isDataLoaded } = this.state;

    if (isDataLoaded === false && data !== undefined) {

      this.rankRandom = [];
      Array(data.trends.length).fill(0).map((item, index) => {
        this.rankRandom.push(index)
        return index;
      });
      this.rankRandom = shuffle(this.rankRandom);
      this.rankRandom.length = 3;
      this.rankRandom.sort()

      seedrandom(data.created_at, { global: true });
      // seedrandom(new Date().getTime(), { global: true });

      this.act();
      this.setState({ isDataLoaded: true });
    }

    if (prevState.actIndex !== actIndex) this.act()
  }

  act() {
    // this.setState({ actIndex: 6 })
    // return;
    const { actIndex } = this.state;
    switch (actIndex) {
      case 0:
        window.BGCanvasSetColor(Math.random())
        gsap.delayedCall(1.0, () => {
          this.setState({ actIndex: 1 })
          window.BGCanvasFadeIn()
        });
        break;

      case 1:
        gsap.delayedCall(6.0, () => {
          this.setState({ actIndex: 2 })
        });
        break;

      case 2:
        gsap.delayedCall(20.0, () => {
          window.BGCanvasToneDown()
          this.setState({ actIndex: 3 })
        });
        break;

      case 3:
        gsap.delayedCall(45.0, () => {
          this.setState({ actIndex: 4 })
        });
        break;

      case 4:
        gsap.delayedCall(45.0, () => {
          this.setState({ actIndex: 5 })
        });
        break;

      case 5:
        gsap.delayedCall(45.0, () => {
          this.setState({ actIndex: 6 })
          window.BGCanvasToneUp()
        });
        break;

      default:
        break;
    }
  }

  render() {
    const { actIndex, isDataLoaded } = this.state;
    if (!isDataLoaded) return <div />
    return (
      <div className='containers'>
        <OpeningContainer {...this.props} className={classNames('container-common')} isShow={actIndex === 1} />
        <RankingContainer {...this.props} className={classNames('container-common')} isShow={actIndex === 2} />
        <PickupWordContainer {...this.props} rankIndex={this.rankRandom[0]} className={classNames('container-common')} isShow={actIndex === 3} />
        <PickupWordContainer {...this.props} rankIndex={this.rankRandom[1]} className={classNames('container-common')} isShow={actIndex === 4} />
        <PickupWordContainer {...this.props} rankIndex={this.rankRandom[2]} className={classNames('container-common')} isShow={actIndex === 5} />
        <EndingContainer {...this.props} className={classNames('container-common')} isShow={actIndex === 6} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    data: state.data.data
  });
}

export default connect(mapStateToProps,
  {
    request
  }
)(SnippetsContainer)