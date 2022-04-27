import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import './EndingContainer.scss'


const AA = [
    "(^o^)o",
    "୧꒰*´꒳`*꒱૭✧",
    "°˖✧◝(⁰▿⁰)◜✧˖°",
    "･:*+.(( °ω° ))/.:+",
    ".｡.:*･'(*ﾟ▽ﾟ*)’･*:.｡.",
    "✧*｡ヾ(｡>﹏<｡)ﾉﾞ✧*。",
    "✩°｡⋆⸜(ू｡•ω•｡)",
    "*゜．;・ (˙o˙)．;*。 ゜",
    "( ^o^)⊃―☆*･｡･ﾟ*",
    "ﾟ･*:.｡..｡.:*･'(*ﾟ▽ﾟ*)’･*:.｡. .｡.:*･。",
    "ଘ(੭*ˊᵕˋ)੭* ੈ♡‧₊˚",
    "⊂(ﾟДﾟ⊂⌒｀つ≡≡≡"
]
let AArandIndex = Math.floor(Math.random() * AA.length);
if (AArandIndex > AA.length) AArandIndex = AA.length - 1;

class EndingContainer extends React.Component {

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
        const { isShow } = this.props;

        const endingElement = (
            <div className='title'>
                <div>
                    <h1>ENJOY TECH LIFE!</h1>
                    <h2>{AA[AArandIndex]}</h2>
                </div>
            </div>
        )

        return (
            <div className={classNames(this.props.className, { 'isShow': isShow })} id='ending-container'>
                {endingElement}
                {endingElement}
            </div>
        );
    }
}

const PROP_TYPES = {
    data: propTypes.object,
    isShow: propTypes.bool
};

EndingContainer.protoType = PROP_TYPES;

export default EndingContainer;