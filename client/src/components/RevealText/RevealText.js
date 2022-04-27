import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import './RevealText.scss'

class RevealText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() { }

    render() {

        const { delay, duration, isShow, isHide, className } = this.props;

        const style = {
            '--delay': delay + 's',
            '--duration': duration + 's',
        };

        return (
            <span style={style} className={
                classNames('reveal-text',
                    className,
                    {
                        'isShow': isShow,
                        'isHide': isHide
                    })}>
                {this.props.children}
            </span>
        );
    }
}

const PROP_TYPES = {
    delay: propTypes.number,
    duration: propTypes.number,
    isShow: propTypes.bool,
    isHide: propTypes.bool
};

RevealText.protoType = PROP_TYPES;

export default RevealText;