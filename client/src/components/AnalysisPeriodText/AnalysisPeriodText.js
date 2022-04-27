import classNames from 'classnames';
import moment from 'moment';
import propTypes from 'prop-types';
import React from 'react';

import './AnalysisPeriodText.scss'

class AnalysisPeriodText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() { }

    render() {

        const { createdAt } = this.props

        const createDate = moment(createdAt)
        const oneWeekBefore = moment(createdAt).subtract(7, 'days')

        return (
            <span className={classNames('analysis-period-text')}>
                <span>解析結果</span>
                <span>{oneWeekBefore.format('YYYY/M/D')} ~{createDate.format('YYYY/M/D')} </span>
            </span>
        );
    }
}

const PROP_TYPES = {
    createdAt: propTypes.string
};

AnalysisPeriodText.protoType = PROP_TYPES;

export default AnalysisPeriodText;