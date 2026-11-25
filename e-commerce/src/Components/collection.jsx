// Import React and useState
import React, { useState } from 'react';

// Import collection data
import outFits from '../jsComponents/collection';

// Import arrow icon
import { GoArrowUpRight } from "react-icons/go";

// Import numbers data
import Numbers from "../jsComponents/num";

function Collection() {
    // Store selected category
    const [category, setCategory] = useState('all');

    // Store filtered products
    const [filteredCards, setFilteredCards] = useState(outFits);

    // Control hover effects
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    // Filter products by category
    const handleCategoryChange = (category) => {
        setCategory(category);

        if (category === 'all') {
            setFilteredCards(outFits);
        } else {
            setFilteredCards(outFits.filter((item) => item.category === category));
        }
    }

    return (
        <div>
            <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className='collection-title'>ELEVATE YOUR STYLE WITH OUR LATEST COLLECTION</h2>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className='collection-description'>Each piece is designed to enhance your fashion and make a statement.</p>

            <div className='collection-filter'>
                {/* Filter products by category */}
                <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" style={{
                    backgroundColor: category == "all" ? "black" : "transparent",
                    color: category == "all" ? "white" : "black"
                }} onClick={() => handleCategoryChange("all")}>All</button>

                <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" style={{
                    backgroundColor: category == "male" ? "black" : "transparent",
                    color: category == "male" ? "white" : "black"
                }} onClick={() => handleCategoryChange("male")}>Men</button>

                <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" style={{
                    backgroundColor: category == "felmale" ? "black" : "transparent",
                    color: category == "felmale" ? "white" : "black"
                }} onClick={() => handleCategoryChange("felmale")}>Women</button>

                <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" style={{
                    backgroundColor: category == "kids" ? "black" : "transparent",
                    color: category == "kids" ? "white" : "black"
                }} onClick={() => handleCategoryChange("kids")}>Kids</button>
            </div>

            <div className='collection1'>
                <div className='collection-items'>
                    {/* Display filtered products */}
                    {filteredCards.map(item => (
                        <div key={item.id} className='collection-item'>
                            <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className='imgdes' src={item.img} alt={item.description} />
                            <div className='title1'>
                                <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">{item.title1}</p>
                                <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">{item.title2}<span><GoArrowUpRight /></span></button>
                            </div>
                            <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className='description'>{item.description}</h3>
                            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className='fit-price'>
                                <p>{item.fit}</p>
                                <p className='price'>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Display numbers from the array */}
            <div className='numm'>
                {Numbers.map(cardd => (
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" key={cardd.id}>
                        <p className='numm1'>{cardd.number}</p>
                        <p className='numm2' style={{ whiteSpace: "pre-wrap" }}>{cardd.word}</p>
                    </div>
                ))}
            </div>

            {/* Display hover information */}
            <div className='myForm'>
                <div className='form'>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
                        <div className={`form1 ${isHovered ? 'hovered' : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">FORMAL WOMEN</p>
                            {isHovered && <span>This dress is perfect for formal occasions. Always<br /> a classic choice, never out of style. You<br /> can't go wrong with it!</span>}
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className={`form2 ${isHovered2 ? 'hovered' : ''}`}
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                        >
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">CASUAL STYLE</p>
                            {isHovered2 && <span >This outfit is all about comfort and relaxation. Perfect for weekends or casual outings, it combines style with ease.</span>}
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className={`form3 ${isHovered3 ? 'hovered' : ''}`}
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">FORMAL MEN</p>
                        {isHovered3 && <span>This suit is tailored for sophistication and elegance. Ideal for<br /> business meetings or formal events, it exudes confidence.</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;