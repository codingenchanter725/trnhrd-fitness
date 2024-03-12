import React from 'react';
import time from '@/public/images/icons/time.svg';
import today from '@/public/images/icons/today.svg';
import people from '@/public/images/icons/people.svg';
import ExplanationProcessBox from 'fitness/components/Elements/ExplanationProcessBox';

const Explanation = () => {
    return (
        <section className="ptb-xs-40 explanation">
            <div className="container">
                <div className="row pb-60 pb-xs-40">
                    <div className="col-md-12 text-center">
                        <div className="section_explanation">
                            <div></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <ExplanationProcessBox 
                        ImageSrc={time}
                        ImageAlt={"time"}
                        text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        title={"Time"}
                        className={"col-lg-4 col-md-6 pt-70 pt-xs-40 mb-sm-30 mb-xs-30"}
                    />
                    <ExplanationProcessBox 
                        ImageSrc={today}
                        ImageAlt={"today"}
                        text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        title={"today"}
                        className={"col-lg-4 col-md-6 pt-70 pt-xs-40 mb-sm-30 mb-xs-30"}
                    />
                    <ExplanationProcessBox 
                        ImageSrc={people}
                        ImageAlt={"people"}
                        text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        title={"people"}
                        className={"col-lg-4 col-md-6 pt-70 pt-sm-20 mb-xs-30"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Explanation;