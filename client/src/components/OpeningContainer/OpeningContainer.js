import classNames from 'classnames';
import moment from 'moment';
import propTypes from 'prop-types';
import React from 'react';

import './OpeningContainer.scss'

class OpeningContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // const { isShow } = this.props;
    }

    render() {
        const { data, isShow } = this.props;

        const createDate = moment(data?.created_at)
        const oneWeekBefore = moment(data?.created_at).subtract(7, 'days')

        const titleElement = (
            <div className='title'>
                <div>
                    <h1>Tech Trend</h1>
                    <div>{oneWeekBefore.format('YYYY/M/D')} ~ {createDate.format('YYYY/M/D')} </div>
                </div>
            </div>
        )

        return (
            <div className={classNames(this.props.className, { 'isShow': isShow })} id='opening-container'>
                {titleElement}
                {titleElement}
            </div>
        );
    }
}

const PROP_TYPES = {
    data: propTypes.object,
    isShow: propTypes.bool
};

OpeningContainer.protoType = PROP_TYPES;

export default OpeningContainer;