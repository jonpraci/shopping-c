import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { AddShoppingCart } from "@material-ui/icons";
import StarRateIcon from "@material-ui/icons/StarRate";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AppsIcon from "@material-ui/icons/Apps";
import FavoriteBorderIcon from "@material-ui/icons//FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";

import { UsedataContext } from "../context";
function Product({ newdata, appState }) {
  const [switchGrid, setSwitchGrid] = useState(true);
  const [val, setVal] = useState("");
  let [num, setNum] = useState(100000000);

  const [optiondata, setOptiondata] = useState([
    { name: "men's clothing" },
    { name: "jewelery" },
    { name: "electronics" },
    { name: "women's clothing" },
  ]);
  const [optionprice, setOptionprice] = useState([
    { price: 50 },
    { price: 100 },
    { price: 150 },
    { price: 200 },
    { price: 250 },
    { price: 300 },
    { price: 350 },
    { price: 400 },
    { price: 450 },
    { price: 500 },
    { price: 550 },
    { price: 600 },
    { price: 700 },
    { price: 750 },
    { price: 800 },
    { price: 850 },
    { price: 900 },
    { price: 950 },
    { price: 1000 },
  ]);
  const myEle = UsedataContext().data.data;

  const [val2, setVal2] = useState("");
  
  const handelChange = (e) => {
    setVal(e.target.value);

    
      appState.filter((ele) => {
          return ele.category.includes(val2)
      })
    
  };

  const singileproduct =
    myEle.length > 0
      ? appState
          .filter((ele) => {
            return ele.price <= num;
          })
          .filter((ele) => {
            if (val === "") {
              return ele;
            } else if (ele.category.toLowerCase().includes(val.toLowerCase())) {
              return ele;
            }
          })
          .map((ele) => {
            return (
              
              <div key={Math.random()}>
                <div key={ele.id} className="pair_card">
                  <div className="pair_item_img">
                    <span>{ele.category}</span>
                    <img src={ele.image} alt={ele.title} />
                  </div>

                  <div className="pair_item_info">
                    <h6>{ele.title}</h6>
                    <div>
                      <div className="pair_stars">
                        <span className="stars">
                          <StarRateIcon
                            className={
                              ele.rating.rate >= 1 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              ele.rating.rate >= 2 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              ele.rating.rate >= 3 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              ele.rating.rate >= 4 ? "color" : "notcolor"
                            }
                          />
                          <StarRateIcon
                            className={
                              ele.rating.rate >= 5 ? "color" : "notcolor"
                            }
                          />
                        </span>
                        <span>
                          <b>{ele.rating.count}</b> reviews{" "}
                        </span>
                        <span>Only 4 left in stock - order soon</span>
                      </div>
                      <hr />
                      <div>
                        <h6>
                          <span style={{ color: "#fc3e39" }}>
                            $ {+ele.price} -{" "}
                          </span>{" "}
                          <span className="line_through">
                            $ {Math.floor(ele.price + 30)}
                          </span>
                        </h6>
                        <p className="pargraph">{ele.description}</p>
                      </div>
                      <div className="card_btn">
                        <ButtonGroup
                          size="small"
                          aria-label="small outlined button group"
                        >
                          <Button>
                            <AddShoppingCart /> My card
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup
                          size="small"
                          aria-label="small outlined button group"
                        >
                          <Button>
                            <FavoriteBorderIcon />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })
      : null;

  return (
    <div className="products">
      <div className="pair_product">
        <div>
          <div className="pair_bar">
            <ul>
              <li>
                <span>{myEle.length > 0 ? singileproduct.length : null} </span>
                <span>Item</span>
              </li>
              <li>
                <span>Filter By: Name </span>
                <select onChange={(e) => setVal(e.target.value)}>
                  {optiondata.map((ele, i) => {
                    return (
                   
                        <option selected="selected"  value={ele.name}>
                          {ele.name}
                        </option>
                     
                    );
                  })}
                </select>
              </li>
              <li>
                <span> Price </span>
                <select onChange={(e) => setNum(+e.target.value)}>
                  {optionprice.length > 0
                    ? optionprice.map((ele) => (
                        <option
                          selected="selected"
                          value={ele.price}
                        >
                          $ {ele.price}
                        </option>
                      ))
                    : null}
                </select>
              </li>
            </ul>
            <div className="grid_control">
              <ButtonGroup
                size="small"
                aria-label="small outlined button group"
              >
                <Button
                  onClick={() => setSwitchGrid(false)}
                  id={switchGrid === false ? "active" : ""}
                >
                  <AppsIcon />
                </Button>
                <Button
                  onClick={() => setSwitchGrid(true)}
                  id={switchGrid === true ? "active" : ""}
                >
                  <DehazeIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div className="pairnav">
      <div>
        <input onChange={handelChange} type="text" placeholder="Search..." />
        <SearchIcon id="searchIcon" />
      </div>
    </div>
        <div id={switchGrid === false ? "bars_pair_product" : "contents"}>
          {myEle.length ? singileproduct : <p> Loading .......</p>}
        </div>
        {/* bars_pair_product */}
      </div>
    </div>
  );
}

export default Product;
