// Import React and useState
import React, { useState } from "react";

// Import product data, colors and arrow icons
import products from "../jsComponents/products.js";
import colors from "../jsComponents/colors.js"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Product() {

  // Available product sizes
  const sizes = [28, 30, 32, 34, 36, 38, 40];

  // Manage product, color, size and cart states
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Filter products based on selected color
  const filteredProducts = selectedColor
    ? products.filter((p) => p.color === selectedColor)
    : products;

  // Select a product thumbnail
  const handleThumbnailClick = (product) => {
    setSelectedProduct(product);
    setCurrentIndex(filteredProducts.indexOf(product));
  };

  // Navigate between product images
  const handleArrowClick = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = filteredProducts.length - 1;
    if (newIndex >= filteredProducts.length) newIndex = 0;
    setSelectedProduct(filteredProducts[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Add selected product to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }

    const newItem = {
      id: selectedProduct.id,
      name: selectedProduct.description,
      image: selectedProduct.thumb,
      color: selectedColor,
      size: selectedSize,
      price: selectedProduct.price,
      cloth: selectedProduct.cloth,
      quantity: 1,
    };

    // Check if the product already exists in the cart
    const existingIndex = cart.findIndex(
      (item) =>
        item.id === newItem.id &&
        item.size === newItem.size &&
        item.color === newItem.color
    );

    if (existingIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Handle cart checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Checkout successful! 🎉");
    setCart([]);
  };

  // Calculate the total cart price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="booxCart">
      <div className="chartBox">
        <div className="boxxcart">
          <div className="chartBox">
            <div>
              {/* Main product image and navigation arrows */}
              <div className="imgbox">
                <div>
                  <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="mainImage"
                    src={selectedProduct.img}
                    alt="Main product"

                  />
                </div>
                <div>
                  <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="bttn1"
                    onClick={() => handleArrowClick(-1)}
                  >
                    < MdKeyboardArrowLeft />
                  </button><br />
                  <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="bttn2"
                    onClick={() => handleArrowClick(1)}
                  >
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>

              {/* Display product thumbnails */}
              <div className="thumbn">
                {filteredProducts.map((product) => (
                  <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"
                    key={product.id}
                    src={product.thumb}
                    alt="Thumbnail"
                    className={`thumbnail ${selectedProduct.id === product.id ? "active" : ""
                      }`}
                    onClick={() => handleThumbnailClick(product)}
                  />
                ))}
              </div>

            </div>
          </div>
          <div >
            <div>
              <div>
                {/* Product details and price */}
                <div className="myDes">
                  <div>

                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="clot">{selectedProduct.cloth}</p>
                    <div className="price-sold">
                      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="price">Price: <span>{selectedProduct.price}</span></p>
                      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="sold">{selectedProduct.sold} sold</p>

                    </div>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="des">Description</p>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="des2">{selectedProduct.description}</p>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="col">Color:</p>
                  </div>
                </div>

                {/* Display available colors */}
                <div className="coloo">
                  {colors.map((color) => (
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"
                      key={color.names}
                      className={`color-swatch ${selectedColor === color.names ? "active" : ""
                        }`}
                      onClick={() => {
                        setSelectedColor(color.names);
                        setCurrentIndex(0);
                      }}
                    >
                      <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" src={color.imgg} alt={color.names} />
                    </div>
                  ))}
                </div>

                {/* Size selection buttons */}
                <div className="mySizee">
                  <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="zie"><span>Size:</span> {selectedSize}</p>
                  <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="sizee">
                    {sizes.map((size) => (
                      <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"
                        key={size}
                        className={`sizess ${selectedSize === size ? "active" : ""
                          }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                </div>

                {/* Add selected item to cart */}
                <div className="myAdd">
                  <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="add"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Display cart items and checkout button */}
      {showCart &&
        (<div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">

          {cart.length === 0 ? (
            <p style={{ display: "none" }}>Your cart is empty</p>
          ) : (
            <div >
              <div className="carrt">
                <div className="cartt">
                  {cart.map((item, idx) => (
                    <div
                      key={idx}

                    >
                      <img className="mainImage2"
                        src={item.image}
                        alt={item.name}

                      />
                      <div>
                        <p className="ccloth">{item.cloth}</p>
                        <p className="dess2">{item.name}</p>
                        <p className="col1"><span>Color:</span> {item.color}</p>
                        <p className="ziee"><span>Size: </span>{item.size}</p>
                      </div>
                      <p className="pri"><span>Price:</span> ${item.price * item.quantity}</p>
                      <p className="qua"><span> Quantity:</span> x{item.quantity}</p>
                    </div>
                  ))}

                </div>
              </div>
              <div className="che">
                <button data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="add"

                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>

            </div>
          )}
        </div>)}

    </div>

  );
}

export default Product;