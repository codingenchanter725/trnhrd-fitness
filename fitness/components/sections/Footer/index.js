import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.png';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container-fluid">
                <div className="row footer_logo">
                    <div className="col-12">
                        <Image src={logo} alt="logo"/>
                    </div>
                </div>
                <div className="row footer-links">
                    <div className="col-md-8 offset-md-2">
                        <hr />
                        <div className="row">
                            <div className="col-md-4 col-4">
                                <div>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        About Us
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        Testimonial
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-4">
                                <div>
                                    <Link href="#">
                                        FAT & Contact
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        Careers
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        Corporate Wellness
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-4">
                                <div>
                                    <Link href="#">
                                        Instagram
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        Facebook
                                    </Link>
                                </div>
                                <div>
                                    <Link href="#">
                                        Twitter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;