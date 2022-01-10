import React, { useState } from "react";
import more from "../Icons/More.svg";
import leftArr from "../Icons/leftArr.svg";
import rightArr from "../Icons/rightArr.svg";
import ProductTemp from "./ProductTemp";
import SeeMore from "../Icons/SeeMore.svg";

function ProductContainer(props) {
  const { products } = props;
  return (
    <div className="">
      <div className="uppercase border border-proBorder bg-input flex justify-between items-center  px-5 py-4  font-semibold text-xs leading-3  tracking-wider text-secFontColor sm:gap-4 lg:gap-32 ">
        {/* FIRST DIV */}
        <div className="  flex items-center   justify-center   lg:justify-items-start flex-1 ">
          <input type="checkbox" className="mr-16" />
          <h4 className="flex-1">Name</h4>
          <h4 className="flex-1">USER Status</h4>
        </div>
        {/* SECOND DIV */}
        <div className="flex items-center justify-between p-0 flex-1 ">
          <h4 className="text-left  pr-14 ">pAYMENT Status</h4>
          <h4 className="text-right ml-7 pl-14 ">Amount</h4>
          <h4 className=" opacity-0 ml-7 font-medium text-xs text-secFontColor">
            View More
          </h4>
          <img className=" ml-7" src={more} alt="" />
        </div>
      </div>
      <div className=" overflow-y-scroll no-scrollbar max-h-96">
        {products.map((pro) => (
          <ProductTemp
            name={pro.name}
            email={pro.email}
            userStatus={pro.userStatus}
            lastLogin={pro.lastLogin}
            paymentStatus={pro.paymentStatus}
            statusOn={pro.statusOn}
            amount={pro.amount}
            currency={pro.currency}
          />
        ))}
      </div>
      {/* <ProductTemp /> */}
      <div className=" border border-proBorder p-3 bg-input  h-auto rounded-b-lg text-secFontColor flex justify-end  ">
        <div className="w-fit flex  text-xs  font-semibold -tracking-tighter text-secFontColor gap-12 ">
          <h4 className="">
            Rows Per page:
            <span>
              10
              <img src={SeeMore} alt="" className="inline ml-2" />
            </span>
          </h4>
          <h4>1-6 of 6</h4>
          <img className=" w-[7px]" src={leftArr} alt="" />
          <img className=" w-[7px]" src={rightArr} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
