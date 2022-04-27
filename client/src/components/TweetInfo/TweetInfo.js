import classNames from 'classnames';
import moment from 'moment';
import propTypes from 'prop-types';
import React from 'react';
import RevealText from '../RevealText/RevealText';

import './TweetInfo.scss'

class TweetInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() { }

    render() {
        const { data, isShow, isHide, baseDelay } = this.props;

        const createdAt = moment(new Date(data?.created_at)).format("YYYY/M/D");

        if (data === undefined) return (<div />)
        return (
            <div className={classNames('tweet-info')}>

                <RevealText
                    className='user-name'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.0}
                    duration={1.0}>
                    {data?.user.name}
                </RevealText>

                <br />

                <RevealText
                    className='screen-name'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.2}
                    duration={1.0}>
                    @{data?.user.screen_name}<span>{createdAt}</span>
                </RevealText>

                <br />

                <RevealText
                    className='text'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.4}
                    duration={1.0}>
                    {data?.text}
                </RevealText>
            </div>
        );
    }
}

const PROP_TYPES = {
    data: propTypes.object,
    baseDelay: propTypes.number,
    isShow: propTypes.bool,
    isHide: propTypes.bool,
};

TweetInfo.protoType = PROP_TYPES;

export default TweetInfo;