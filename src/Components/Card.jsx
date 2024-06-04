import React from "react";
import "./Card.css";

const Card = ({ setValue, value, arr, setArr }) => {
  const handleClick = (index) => {
    setArr((prevArr) =>
      prevArr.map((product, i) =>
        i === index ? { ...product, inCart: !product.inCart } : product
      )
    );
    setValue((val) => {
      const inCart = arr[index].inCart;
      return inCart ? val - 1 : val + 1;
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {arr.map((ele, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex justify-content-center position-relative">
                    <img
                      src={ele.image}
                      alt={ele.productName}
                      width={200}
                      className="mx-auto"
                    />
                    {ele.star && (
                      <div className="sale-box bg-dark text-white p-2">
                        sale
                      </div>
                    )}
                  </div>
                  <div className="card-head text-center">
                    <h3>{ele.productName}</h3>
                  </div>
                  {ele.war && (
                    <div className="text-warning text-center">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                  )}
                  <div className="text-center">
                    <span className="strikethrough">{ele.originalPrice}</span>
                    <span>{ele.discountedPrice}</span>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center">
                  <button
                    className="btn btn-outline-primary mt-auto"
                    onClick={() => {
                      if (!ele.viewoption) {
                        handleClick(index);
                      }
                    }}
                    href="#"
                  >
                    {ele.viewoption
                      ? "View Option"
                      : ele.inCart
                      ? "Remove from Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
