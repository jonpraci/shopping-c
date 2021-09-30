import React, { useEffect, useState } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { UsedataContext } from "../context";
import Ranger from "./Ranger/Ranger";
export const Sidebar = ({newdata}) => {
  const { myEle } = UsedataContext();
  const [optiondata, setOptiondata] = useState([
    { name: "men's clothing" },
    { name: "jewelery" },
    { name: "electronics" },
    { name: "women's clothing" },
  ]);
  return (
    <div className="sidebar">
      <div className="first_part">
        <h6>ACCESORIOS</h6>
        <ul>
          {optiondata.map((e) => {
            return (
              <li key={Math.random()}>
                <span>{e.name}</span> <span>5</span>
              </li>
            );
          })}

        </ul>
      </div>


      <Ranger newdata={newdata} />

      <div className="colors">
        <h6>COLOR</h6>
        <div className="bullets">
          <span>
            <span></span>
          </span>
          <span>
            <span></span>
          </span>
          <span>
            <span></span>
          </span>
          <span>
            <span></span>
          </span>
          <span>
            <span></span>
          </span>
          <span>
            <span></span>
          </span>
          <span>
            <span></span>
          </span>
        </div>
      </div>

      <div className="first_part">
        <h6>BRAND</h6>
        <ul>
        {optiondata.map((e) => {
            return (
              <li key={Math.random()}>
                <span>{e.name}</span> <span>5</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rating">
        <h6>RATING</h6>
        <div>
          <div>
            <span>
              <input type="checkbox" />
            </span>{" "}
            <span className="stars_rate">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </span>
          </div>

          <div>
            <span>
              <input type="checkbox" />
            </span>{" "}
            <span className="stars_rate">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </span>
          </div>

          <div>
            <span>
              <input type="checkbox" />
            </span>{" "}
            <span className="stars_rate">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </span>
          </div>

          <div>
            <span>
              <input type="checkbox" />
            </span>{" "}
            <span className="stars_rate">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="more">MORE</div>
    </div>
  );
};
