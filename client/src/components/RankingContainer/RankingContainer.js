import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';
import AnalysisPeriodText from '../AnalysisPeriodText/AnalysisPeriodText';
import RevealText from '../RevealText/RevealText';

import './RankingContainer.scss'

class RankingContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowIndex: false,
            isHideIndex: false,
            isShowWord: false,
            isHideWord: false,
            isShowScore: false,
            isHideScore: false,
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { isShow } = this.props;

        if (isShow && prevProps.isShow !== isShow) {
            this.setState({ isShowIndex: true })
            this.setState({ isShowWord: true })
            this.setState({ isShowScore: true })
        }
    }

    render() {
        const { data, isShow } = this.props;
        const { isShowIndex, isHideIndex, isShowWord, isShowScore, isHideScore, isHideWord } = this.state;

        // console.log(data, isShow);

        //============================================================================================
        //left
        const BASE_DELAY = 0.2;
        let best5Indeies = [];
        let best5Words = [];
        let best5Scores = [];
        let best15Indeies = [];
        let best15Words = [];
        let best15Scores = [];

        data.ranking && data.ranking.forEach((element, index) => {


            //==============================================================
            // best 5
            //==============================================================
            if (index < 5) {
                best5Indeies.push(
                    <li key={index}>
                        <RevealText
                            isShow={isShowIndex}
                            isHide={isHideIndex}
                            // delay={isHideIndex ? 0.0 : index * 0.1}
                            delay={index * BASE_DELAY}
                            duration={1.0}>
                            {index + 1}
                        </RevealText>
                    </li>
                );
                best5Words.push(
                    <li key={index}>
                        <RevealText
                            isShow={isShowWord}
                            isHide={isHideWord}
                            delay={index * BASE_DELAY}
                            duration={1.0}>
                            {element.word}
                        </RevealText>
                    </li>
                );
                best5Scores.push(
                    <li key={index}>
                        <RevealText
                            isShow={isShowScore}
                            isHide={isHideScore}
                            delay={index * BASE_DELAY}
                            duration={1.0}>
                            {element.score}
                        </RevealText>
                    </li>
                );
            }


            //==============================================================
            // best 6-15
            //==============================================================
            if (index >= 5) {
                best15Indeies.push(
                    <li key={index}>
                        <RevealText
                            isShow={isShowIndex}
                            isHide={isHideIndex}
                            // delay={isHideIndex ? 0.0 : index * 0.1}
                            delay={index * BASE_DELAY}
                            duration={1.0}>
                            {index + 1}
                        </RevealText>
                    </li>
                );
                best15Words.push(
                    <li key={index}>
                        <RevealText
                            isShow={isShowWord}
                            isHide={isHideWord}
                            delay={index * BASE_DELAY}
                            duration={1.0}>
                            {element.word}
                        </RevealText>
                    </li>
                );
                best15Scores.push(
                    <li key={index}>
                        <RevealText
                            isShow={isShowScore}
                            isHide={isHideScore}
                            delay={index * BASE_DELAY}
                            duration={1.0}>
                            {element.score}
                        </RevealText>
                    </li>
                );
            }

        });


        return (
            <div className={classNames(this.props.className, { 'isShow': isShow })} id='ranking-container'>

                {/* LEFT ===================================================================== */}
                <div className='screen-box left'>
                    <div><AnalysisPeriodText createdAt={data.created_at}></AnalysisPeriodText></div>
                    <div><h2>Tech Word Ranking</h2></div>
                    <div className='info'>Twitterの技術アカウント2000人の直近ツイートを解析、技術単語の頻出度を元にスコアを算出</div>
                    <div>
                        <ul className={classNames('rank-index')}>
                            <li>Rank</li>
                            {best5Indeies}
                        </ul>
                        <ul className={classNames('rank-word')}>
                            <li>Word</li>
                            {best5Words}
                        </ul>
                        <ul className={classNames('rank-score')}>
                            <li>Score</li>
                            {best5Scores}
                        </ul>
                    </div>

                </div>


                {/* RIGHT ===================================================================== */}
                <div className='screen-box right'>
                    <div>
                        <ul className={classNames('rank-index')}>
                            <li>Rank</li>
                            {best15Indeies}
                        </ul>
                        <ul className={classNames('rank-word')}>
                            <li>Word</li>
                            {best15Words}
                        </ul>
                        <ul className={classNames('rank-score')}>
                            <li>Score</li>
                            {best15Scores}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

const PROP_TYPES = {
    isShow: propTypes.bool
};

RankingContainer.protoType = PROP_TYPES;

export default RankingContainer;