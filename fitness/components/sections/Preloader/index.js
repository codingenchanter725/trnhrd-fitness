import React from 'react';
import { PreloaderContainer } from './style';
import * as PropTypes from 'prop-types';

const propTypes = {
	isLoading: PropTypes.bool,
};

const defaultProps = {
    isLoading: true
};

const Preloader = ( {isLoading} ) => {
    return (
        isLoading && <PreloaderContainer>
            <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
            </div>
        </PreloaderContainer>
    );
};

export default Preloader;

Preloader.propTypes = propTypes;
Preloader.defaultProps = defaultProps;