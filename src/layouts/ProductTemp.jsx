import React, { useState } from "react";
import more from "../Icons/More.svg";
import upArr from "../Icons/UpArr.svg";
import downArr from "../Icons/DownArr.svg";
import Active from "../Icons/Active.svg";
import Inactive from "../Icons/Inactive.svg";
import Paid from "../Icons/Paid.svg";
function ProductTemp(props) {
  const {
    name,
    email,
    userStatus,
    lastLogin,
    paymentStatus,
    statusOn,
    amount,
    currency,
  } = props;
  const [state, setstate] = useState(false);
  return (
    <>
      <div className="border border-proBorder flex justify-between items-center  px-5 py-4 h-16 font-semibold text-xs leading-3  tracking-wider text-secFontColor gap-48 ">
        <div className="flex items-center  justify-items-start flex-1 ">
          <div className="flex gap-5 mr-7 items-center">
            <input
              type="checkbox"
              className=" rounded border border-paid p-2"
            />
            {state ? (
              <img src={upArr} alt="" onClick={() => setstate(false)} />
            ) : (
              <img src={downArr} alt="" onClick={() => setstate(true)} />
            )}
          </div>

          <div className="flex flex-col flex-1 gap-1">
            <h4 className=" font-medium text-sm leading-[17px] text-priFontCont">
              {name}
            </h4>
            <h5 className=" text-sm tracking-wider leading-[17px]">{email}</h5>
          </div>
          <div className="flex flex-col flex-1 gap-[7px]">
            {userStatus == "active" ? (
              <h4 className=" flex gap-1 items-center text-xs leading-4  text-active  bg-acBg  w-fit p-1 rounded-[10px]">
                <img src={Active} alt="" />
                Active
              </h4>
            ) : (
              <h4 className=" flex gap-1 items-center text-xs leading-4   text-secFontColor bg-acBg  w-fit p-1 rounded-[10px]">
                <img src={Inactive} alt="" />
                Inactive
              </h4>
            )}
            <h5 className=" font-medium text-xs leading-4  text-secFontColor">
              Last login: {lastLogin}
            </h5>
          </div>
        </div>
        <div className=" flex items-center justify-between p-0 flex-1">
          <div className="flex flex-col gap-[7px] text-left pr-14">
            <h4 className=" flex gap-1 items-center text-xs leading-4 bg-lightPaid  text-paid rounded-[10px] w-fit p-1">
              <img src={Paid} alt="" />
              Paid
            </h4>

            <h5 className=" font-medium  text-xs leading-3 text-priFontCont">
              {paymentStatus == "Paid" ? "Paid" : "Dued"} on 15/APR/2020
            </h5>
          </div>

          <div className="text-right ml-7 pl-14">
            <h4 className="text-sm uppercase text-priFontCont ">{amount}</h4>
            <h5 className="text-xs  tracking-wider text-secFontColor">USD</h5>
          </div>
          <h4 className="ml-7"> View More</h4>
          <img className=" ml-7" src={more} alt="" />
        </div>
      </div>

      {/* MORE INFO */}
      {state && (
        <div>
          <div className="uppercase border border-proBorder bg-input flex justify-between items-center  px-24 py-4 h-11 font-semibold text-xs leading-3  tracking-wider text-secFontColor  gap-44 ">
            <div className="flex  w-full">
              <h4 className="w-[10%] ">Date</h4>
              <h4 className=" w-[30%]">User Activity</h4>
              <h4 className="w-3/6 pl-2">Detail</h4>
            </div>
          </div>

          {/* DETAILS */}
          <div className="border border-proBorder bg-input flex justify-between items-center  px-24 py-4 h-16 leading-[17px]  tracking-wider text-secFontColor  gap-44 text-sm font-normal">
            <div className="flex items-center w-full ">
              <h4 className="w-[10%] ">12/APR/2020</h4>
              <h4 className="w-[30%] text-priFontCont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies.
              </h4>
              <h4 className="w-3/6  pl-2 text-priFontCont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae.
                Ultricies suspendisse vestibulum.
              </h4>
            </div>
          </div>
          <div className="border border-proBorder bg-input flex justify-between items-center  px-24 py-4 h-16 leading-[17px]  tracking-wider text-secFontColor  gap-44 text-sm font-normal">
            <div className="flex items-center w-full ">
              <h4 className="w-[10%] ">12/APR/2020</h4>
              <h4 className="w-[30%] text-priFontCont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies.
              </h4>
              <h4 className="w-3/6  pl-2 text-priFontCont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae.
                Ultricies suspendisse vestibulum.
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductTemp;
