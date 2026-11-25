// Import React
import React from "react";

// Import images
import star from "../images/starr(1)(1).png"

// Import icons
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
    return (
        <div className="myFooter">

            {/* Moving text section */}
            <marquee data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" scrollamount = "10">
                <div className="footer1">
                    <p>T-SHIRT</p>
                    <img src={star} />
                    <p>LONG SLEEVE T-SHIRT</p>
                    <img src={star} />
                    <p>RAGLAN SLEEVE SHIRT</p>
                    <img src={star} />
                    <p>CROP TOP</p>
                    <img src={star} />
                    <p>V-NECK SHIRT</p>
                    <img src={star} />
                    <p>T-SHIRT</p>
                    <img src={star} />
                    <p>LONG SLEEVE T-SHIRT</p>
                    <img src={star} />
                    <p>RAGLAN SLEEVE SHIRT</p>
                    <img src={star} />
                    <p>CROP TOP</p>
                    <img src={star} />
                    <p>MUSCLE SHIRT</p>
                    <img src={star} />
                    <p>TANK TOP</p>
                </div>
            </marquee>

            {/* Horizontal line */}
            <div className="liine1">
                <hr data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" />
            </div>

            {/* Logo and social media icons */}
            <div className="footer2">
                <div className="loogo">
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><i>DressUpo</i></p>
                </div>
                <div className="footerBtn">
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaInstagram /></button>
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><CiGlobe /></button>
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaTwitter /></button>
                    <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaBehance /></button>
                </div>
            </div>

            <div className="liine2">
                <hr data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" />
            </div>

            {/* Footer navigation links */}
            <div className="footerDivl">
                <div className="footer3">
                    <h4 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="footerDiv4">Home</h4>
                    <div className="footer3Div">
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter1">Why Us</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter">.</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter1">About Us</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter">.</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter1">Testimonial</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter">.</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter1">FAQs</p>
                    </div>
                </div>

                {/* Product categories */}
                <div className="footer4">
                    <h4 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="footerDiv4">Products</h4>
                    <div className="footer3Div">
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter1">Menswear</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter">.</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter1">Womenswear</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter">.</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="pfooter1">Kidswear</p>
                    </div>
                </div>

                {/* Newsletter section */}
                <div className="footer5">
                    <h4 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="footerDiv4">Subscribe to Newsletter</h4>
                    <div className="footerInput">
                        <input data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" type="email" />
                        <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"><FaArrowRight /></button>
                    </div>
                </div>
            </div>

            <div className="liine2">
                <hr data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" />
            </div>

            {/* Copyright and policies */}
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="lastFooter">
                <div>
                    <p>&copy; 2026 DressUpo . All rights reserved.</p>
                </div>
                <div>
                    <p>Terms & Conditions | Privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;