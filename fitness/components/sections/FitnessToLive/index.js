import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import back1 from '@/public/images/explanation/back1.png';
import get_in_touch from '@/public/images/icons/get_in_touch.svg';
import FitnessToLiveItem from 'fitness/components/Elements/FitnessToLiveItem';

const FitnessToLive = () => {
    return (
        <section className="padding ptb-xs-40 fitness_to_live">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div>
                            <h3>
                                PERSONAL TRAINING AND EXPERT
                            </h3>
                            <h2 className="fitness_to_live_title">
                                FITNESS TO LIVE YOUR BEST
                            </h2>
                            <p className="fitness_h2_paragraph">
                                It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout.
                            </p>
                        </div>

                        <div>
                            <FitnessToLiveItem
                                className={"fitness_to_live_item"}
                                title={"FITNESS TRAINING"}
                                text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                            />

                            <FitnessToLiveItem
                                className={"fitness_to_live_item"}
                                title={"WORKOUT CALENDAR"}
                                text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                            />

                            <FitnessToLiveItem
                                className={"fitness_to_live_item"}
                                title={"LOG BOOK"}
                                text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                            />

                            <div className="fitness_to_live_get_in_touch">
                                <Link href={"#"}>
                                    <a>
                                        <Image src={get_in_touch} alt="get_in_touch"/>
                                    </a>
                                </Link>

                                <div>
                                    <h3>
                                        Get in touch & get fit
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <Image src={back1} alt="explanation"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FitnessToLive;