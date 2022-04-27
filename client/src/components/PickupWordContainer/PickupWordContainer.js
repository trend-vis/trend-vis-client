import classNames from 'classnames';

import propTypes from 'prop-types';
import React from 'react';
import AnalysisPeriodText from '../AnalysisPeriodText/AnalysisPeriodText';
import GithubRepoInfo from '../GithubRepoInfo/GithubRepoInfo';
import RevealText from '../RevealText/RevealText';
import TweetInfo from '../TweetInfo/TweetInfo';

import { ReactComponent as GithubLogo } from "./../../assets/github.svg";
import { ReactComponent as TwitterLogo } from "./../../assets/twitter.svg";


import './PickupWordContainer.scss'

class PickupWordContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAllShow: false,
            isAllHide: false,
            isShowFirstTweet: false,
            isHideFirstTweet: false,
            isShowSecondTweet: false,
            isHideSecondTweet: false,
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { isShow } = this.props;

        if (isShow && prevProps.isShow !== isShow) {


            this.setState({
                isShowFirstTweet: true,
                isAllShow: true
            })

            setTimeout(() => {
                this.setState({ isHideFirstTweet: true })
            }, 20000);

            setTimeout(() => {
                this.setState({ isShowSecondTweet: true })
            }, 22000);

            setTimeout(() => {
                this.setState({
                    isHideSecondTweet: true,
                    isAllHide: true
                })
            }, 43000);

        }

    }

    render() {
        const { data, isShow, rankIndex } = this.props;
        const { isShowFirstTweet, isHideFirstTweet, isShowSecondTweet, isHideSecondTweet, isAllShow, isAllHide } = this.state;

        const trendWord = data.trends?.[rankIndex].word;

        return (

            <div className={classNames(this.props.className, { 'isShow': isShow })} id='best1-container'>


                {/* 1 ==================================================================== */}
                <div className='screen-half-box row1'>
                    <div>
                        <RevealText
                            className='trendWord'
                            isShow={isAllShow}
                            isHide={isAllHide}
                            delay={0.0}
                            duration={1.0}>
                            {trendWord}
                        </RevealText>
                    </div>
                    <div className='info'>
                        <RevealText
                            isShow={isAllShow}
                            isHide={isAllHide}
                            delay={0.4}
                            duration={1.0}>
                            <span className='tag'>Rank</span>
                            <span>{rankIndex + 1}</span>
                            <span className='tag'>Score</span>
                            <span>{data.ranking?.[rankIndex].score}</span>
                        </RevealText>
                    </div>
                    <div>
                        <RevealText
                            isShow={isAllShow}
                            isHide={isAllHide}
                            delay={0.6}
                            duration={1.0}>
                            <AnalysisPeriodText createdAt={data.created_at}></AnalysisPeriodText>
                        </RevealText>
                    </div>
                    <hr className={classNames({
                        isShow: isAllShow,
                        isHide: isAllHide
                    })} />

                </div>


                {/* 2 ==================================================================== */}
                <div className='screen-half-box row2'>

                    <div className='lead'>
                        <GithubLogo className={classNames({
                            isShow: isAllShow,
                            isHide: isAllHide
                        })} />
                        <div>
                            <RevealText
                                isShow={isAllShow}
                                isHide={isAllHide}
                                delay={0.0}
                                duration={1.0}>
                                <h5>{trendWord}</h5>
                            </RevealText>
                            <br />
                            <RevealText
                                isShow={isAllShow}
                                isHide={isAllHide}
                                delay={0.2}
                                duration={1.0}>
                                <span>関連<b>Github</b>リポジトリ</span>
                            </RevealText>

                        </div>
                    </div>

                    {!isShowSecondTweet ?
                        <GithubRepoInfo
                            baseDelay={0.4}
                            data={data.trends?.[rankIndex].github[0]}
                            isShow={isShowFirstTweet}
                            isHide={isHideFirstTweet}
                        />
                        :
                        <GithubRepoInfo
                            baseDelay={0.4}
                            data={data.trends?.[rankIndex].github[1]}
                            isShow={isShowSecondTweet}
                            isHide={isHideSecondTweet}
                        />
                    }

                </div>



                {/* 3 ==================================================================== */}
                <div className='screen-half-box row3'>

                    <div className='lead'>
                        <TwitterLogo className={classNames({
                            isShow: isAllShow,
                            isHide: isAllHide
                        })} />
                        <div>
                            {/* <h5>{trendWord}</h5> */}
                            <RevealText
                                isShow={isAllShow}
                                isHide={isAllHide}
                                delay={0.0}
                                duration={1.0}>
                                <h5>{trendWord}</h5>
                            </RevealText>
                            <br />
                            <RevealText
                                isShow={isAllShow}
                                isHide={isAllHide}
                                delay={0.2}
                                duration={1.0}>
                                <span>関連ツイート</span>
                            </RevealText>

                        </div>
                    </div>

                    {!isShowSecondTweet ?
                        <div className='tweets'>
                            <div>
                                <TweetInfo
                                    baseDelay={0.4}
                                    isShow={isShowFirstTweet}
                                    isHide={isHideFirstTweet}
                                    data={data.trends?.[rankIndex].tweets[0]}
                                />
                                <hr className={classNames({
                                    isShow: isShowFirstTweet,
                                    isHide: isHideFirstTweet
                                })} />
                                <TweetInfo
                                    baseDelay={0.8}
                                    isShow={isShowFirstTweet}
                                    isHide={isHideFirstTweet}
                                    data={data.trends?.[rankIndex].tweets[1]}
                                />
                            </div>
                            <div>
                                <TweetInfo
                                    baseDelay={0.4}
                                    isShow={isShowFirstTweet}
                                    isHide={isHideFirstTweet}
                                    data={data.trends?.[rankIndex].tweets[2]}
                                />
                                <hr className={classNames({
                                    isShow: isShowFirstTweet,
                                    isHide: isHideFirstTweet
                                })} />
                                <TweetInfo
                                    baseDelay={0.8}
                                    isShow={isShowFirstTweet}
                                    isHide={isHideFirstTweet}
                                    data={data.trends?.[rankIndex].tweets[3]}
                                />
                            </div>
                        </div>
                        :
                        <div className='tweets'>
                            <div>
                                <TweetInfo
                                    baseDelay={0.4}
                                    isShow={isShowSecondTweet}
                                    isHide={isHideSecondTweet}
                                    data={data.trends?.[rankIndex].tweets[4]}
                                />
                                <hr className={classNames({
                                    isShow: isShowSecondTweet,
                                    isHide: isHideSecondTweet
                                })} />
                                <TweetInfo
                                    baseDelay={0.8}
                                    isShow={isShowSecondTweet}
                                    isHide={isHideSecondTweet}
                                    data={data.trends?.[rankIndex].tweets[5]}
                                />
                            </div>
                            <div>
                                <TweetInfo
                                    baseDelay={0.4}
                                    isShow={isShowSecondTweet}
                                    isHide={isHideSecondTweet}
                                    data={data.trends?.[rankIndex].tweets[6]}
                                />
                                <hr className={classNames({
                                    isShow: isShowSecondTweet,
                                    isHide: isHideSecondTweet
                                })} />
                                <TweetInfo
                                    baseDelay={0.8}
                                    isShow={isShowSecondTweet}
                                    isHide={isHideSecondTweet}
                                    data={data.trends?.[rankIndex].tweets[7]}
                                />
                            </div>
                        </div>
                    }




                </div>




            </div >
        );
    }
}

const PROP_TYPES = {
    data: propTypes.object,
    isShow: propTypes.bool,
    isHide: propTypes.bool,
    rankIndex: propTypes.number
};

PickupWordContainer.protoType = PROP_TYPES;

export default PickupWordContainer;