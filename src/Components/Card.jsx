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
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {arr.map((ele, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                  <img
                    src={ele.image}
                    alt={ele.productName}
                    width={300}
                    className="mx-auto"
                  />
                  </div>
                  <div className="card-head text-center">
                    <h3>{ele.productName}</h3>
                  </div>
                  <div className="card-text text-center">
                    <h3>{ele.price}</h3>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center">
                  <button
                    className="btn btn-outline-primary mt-auto "
                    onClick={() => handleClick(index)}
                    href="#"
                  >
                    {ele.inCart ? "Remove from Cart" : "Add to Cart"}
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
