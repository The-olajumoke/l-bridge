import React from "react";
import Container from "../components/Container";

// import { products, categories } from "./data";

export default function Index() {
  return (
    <div className=" h-screen  bg-background   p-[100px] pt-[50px] not-italic flex flex-col">
      <header className=" text-secFontColor  text-sm leading-[17px] tracking-widest uppercase pb-5  font-bold ">
        Table Heading
      </header>
      <div className=" flex justify-between pb-[11px] items-center border-b-2 border-border">
        <div className=" flex gap-[30px] ">
          <button className="text-secFontColor font-medium text-sm leading-[17px] ">
            All
          </button>
          <button className="text-secFontColor font-medium text-sm leading-[17px] ">
            Paid
          </button>
          <button className="text-secFontColor font-medium text-sm leading-[17px] ">
            Unpaid
          </button>
          <button className="text-secFontColor font-medium text-sm leading-[17px] ">
            Overdue
          </button>
        </div>
        <h4 className="text-secFontColor font-medium text-sm leading-[17px]">
          Total payable amount:
          <span className=" mx-1 font-extrabold text-btnPri">$900.00</span>
          USD
        </h4>
      </div>

      <Container />
    </div>
  );
}
