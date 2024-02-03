import styles from "./Shopping.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const data = [
  {
    name: "Fancy Product",
    identity: "product1",
    rate: "$40.00 - $80.00",
    btn: "View options",
  },
  {
    name: "Special item",
    identity: "product2",
    rate: "$18.00",
    btn: "Add to cart",
  },
  {
    name: "Sale Item",
    identity: "product3",
    rate: "$25.00",
    btn: "Add to cart",
  },
  {
    name: "Popular Item",
    identity: "product4",
    rate: "$40.00",
    btn: "Add to cart",
  },
  {
    name: "Sale Item",
    identity: "product5",
    rate: "$25.00",
    btn: "Add to cart",
  },
  {
    name: "Fancy Product",
    identity: "product6",
    rate: "$120.00 - $280.00",
    btn: "View options",
  },
  {
    name: "Special item",
    identity: "product7",
    rate: "$18.00",
    btn: "Add to cart",
  },
  {
    name: "Popular Item",
    identity: "product8",
    rate: "$40.00",
    btn: "Add to cart",
  },
];

const ShopContent = () => {
  return (
    <div className={styles.ShopContent}>
      <h1>Shop in style</h1>
      <h3>With this shop hompeage template</h3>
    </div>
  );
};

const CardsDisplay = ({
  name,
  rate,
  btn,
  identity,
  handleIsLike,
  islike = false,
}) => {
  return (
    <div className={styles.demo}>
      <p className={styles.para}>400 x 200</p>
      <h2>{name}</h2>
      {name === "Special item" ? (
        <p>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <br />
          <del>$20.00</del> {rate}
        </p>
      ) : name === "Popular Item" ? (
        <p>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          {rate}
          <br />
          <br />
        </p>
      ) : name === "Sale Item" ? (<p><del>$50.00</del> {rate}<br /><br /></p>):(
        <p>{rate}<br /><br /></p>
      )}
      
      <div className={styles.buttonContainer}>
        {name === "Fancy Product" ? (
          <button type="button">{btn}</button>
        ) : (
          <button type="button" onClick={() => handleIsLike(identity)}>
            {islike ? "Remove Cart" : btn}
          </button>
        )}
      </div>
    </div>
  );
};

CardsDisplay.propTypes = {
  name: PropTypes.string,
  rate: PropTypes.string,
  btn: PropTypes.string,
  identity: PropTypes.string,
  handleIsLike: PropTypes.func,
  islike: PropTypes.bool,
};
const Cards = () => {
  const [islikedata, setLikeData] = useState([]);
  const [count, setcount] = useState(0);
  const handleIsLike = (identity) => {
    if (islikedata.includes(identity)) {
      setLikeData(islikedata.filter((item) => item !== identity));
      console.log("Inside if condition", islikedata);
      setcount(count - 1);
    } else {
      setLikeData([...islikedata, identity]);
      setcount(count + 1);
      console.log("Inside else condition", islikedata);
    }
  };
  return (
    <>
      <div className={styles.topbar}>
        <span>
          <i className="bx bxs-cart"></i> Cart<span>{count}</span>
        </span>
      </div>
      <ShopContent />
      <div className={styles.container}>
        {data.map((value) => {
          return (
            <CardsDisplay
              key={value.identity}
              {...value}
              handleIsLike={handleIsLike}
              islike={islikedata.includes(value.identity)}
            />
          );
        })}
        ;
      </div>
    </>
  );
};

export default Cards;
