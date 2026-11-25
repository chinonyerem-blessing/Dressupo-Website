// Import React
import React from "react"

// Import images
import myImg1 from "../images/manStanding1.jpeg"
import Quality1 from "../images/quality1.png"
import Quality2 from "../images/quality2.png"
import Quality3 from "../images/quality3.png"
import Quality4 from "../images/quality4.png"


function Display() {
    return (
        <div>
            {/* Main product display */}
            <div className="myImage">
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="diorImg1">
                    <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="diorImg" src={myImg1} />
                </div>
                <div>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="collect1">Women Collection</p>
                    <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="collect2">Peaky Blinders</h3>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="collect3"><u>Description</u></p>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="collect4">Experience the allure of Peaky Blinders fashion with our<br /> exclusive collection. Inspired by the iconic style of the<br /> Shelby family, our pieces blend vintage charm with modern <br />elegance. From tailored suits to statement accessories, each<br /> item is crafted to embody the spirit of 1920s Birmingham.</p>

                    {/* Product size */}
                    <div className="collect5">
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Size:</p>
                        <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">M</button>
                    </div>

                    {/* Product price */}
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="collect6">$100.<span>00</span></p>
                    <div className="collect8">
                        <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="collect7">Buy Now</button>
                    </div>
                </div>

            </div>

            {/* Product quality features */}
            <div className="myQuality">
                <div className="quality">
                    <div>
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="quaImg" src={Quality1} />
                    </div>
                    <div>
                        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">High Quality</h3>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Crafted from top materials</p>
                    </div>
                </div>
                <div className="quality">
                    <div>
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="quaImg" src={Quality2} />
                    </div>
                    <div>
                        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Warrenty Protection</h3>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Over 2 years</p>
                    </div>
                </div>
                <div className="quality">
                    <div>
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="quaImg" src={Quality3} />
                    </div>
                    <div>
                        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Free Shipping</h3>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Order over 150</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="quality">
                    <div>
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="quaImg" src={Quality4} />
                    </div>
                    <div>
                        <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">24/7 Support</h3>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Dedicated Support</p>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">detail support </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display;