import React from "react";
import filter from "../Icons/Filter.svg";
import search from "../Icons/Search.svg";
import ProductContainer from "../layouts/ProductContainer";
function Container() {
  return (
    <div className=" w-full mt-5 bg-white  shadow-mainBox rounded-lg ">
      <div className="flex justify-between items-center py-4 px-5 ">
        <div className="flex gap-5 items-center">
          <button className="flex  gap-[10px] bg-white border border-border  rounded-md p-[10px] items-center justify-between text-base leading-4 text-priFontCont">
            <img src={filter} alt="" />
            Filter
          </button>
          <div className="p-[10px] flex gap-[10px] bg-input rounded-md text-xs leading-3 w-96 ">
            <img src={search} alt="" />
            <input
              className="bg-input flex-1  outline-none "
              type="text"
              placeholder="Search Users by Name, Email or Date"
            />
          </div>
        </div>
        <button className="bg-btnPri p-[10px] rounded-md text-base leading-4 uppercase text-white ">
          Pay Dues
        </button>
      </div>

      <ProductContainer />
    </div>
  );
}

export default Container;
