import PropTypes from "prop-types";

import {useState} from 'react';
import { setActiveSort } from "../../helpers/product";
import Circle from '@uiw/react-color-circle';


const ShopColor1 = ({ colors, getSortParams }) => {
  const [hex, setHex] = useState('#F44E3B');
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Color </h4>
      <Circle
      colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#321332', '#355332', '#786332', '#636832', '#123332' ]}
      color={hex}
      onChange={(color, e) => {
        setHex(color.hex);
        getSortParams("color", color);
        setActiveSort(e);
      }}
    />
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("color", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Colors{" "}
                </button>
              </div>
            </li>
           
            {
            colors.map((color, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        getSortParams("color", color);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {color}{" "}
                    </button>
                  </div>
                </li>
              );
            })
            }
          </ul>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

ShopColor1.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopColor;
