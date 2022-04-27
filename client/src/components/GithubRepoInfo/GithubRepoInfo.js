import classNames from 'classnames';
import moment from 'moment';
import propTypes from 'prop-types';
import React from 'react';
import RevealText from '../RevealText/RevealText';

import './GithubRepoInfo.scss'

class GithubRepoInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() { }

    render() {

        const { data, isShow, isHide, baseDelay } = this.props;

        const updatedAt = moment(data?.updated_at).fromNow();

        return (
            <span className={classNames('github-repo-info')}>

                <RevealText
                    className='full-name'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.0}
                    duration={1.0}>
                    {data?.full_name}
                </RevealText>

                <br />

                <RevealText
                    className='info'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.2}
                    duration={1.0}>
                    <span>★ {data?.stargazers_count}</span><span>Updated {updatedAt}</span>
                </RevealText>

                <br />

                <RevealText
                    className='desc'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.4}
                    duration={1.0}>
                    {data?.description}
                </RevealText>

                <br />

                <RevealText
                    className='desc-jp-memo'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.6}
                    duration={1.0}>
                    (機械翻訳)&nbsp;
                </RevealText>


                <RevealText
                    className='desc-jp'
                    isShow={isShow}
                    isHide={isHide}
                    delay={baseDelay + 0.6}
                    duration={1.0}>
                    {data?.description_jp}
                </RevealText>

            </span>
        );
    }
}

const PROP_TYPES = {
    data: propTypes.object,
    baseDelay: propTypes.number,
    isShow: propTypes.bool,
    isHide: propTypes.bool,
};

GithubRepoInfo.protoType = PROP_TYPES;

export default GithubRepoInfo;