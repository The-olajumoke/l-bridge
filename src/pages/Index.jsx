import React, { useState } from "react";
import Container from "../components/Container";
import { products } from "./data";

export default function Index() {
  const [activeTab, setactiveTab] = useState("All");

  const data = products.filter((item) => {
    if (activeTab == "All") {
      return products;
    }
    if (item.paymentStatus == activeTab) {
      return item.paymentStatus == activeTab;
    }
  });
  console.log(data);
  // const [currentProducts, setcurrentProducts] = useState(data);

  return (
    <div className="h-screen p-4 bg-background  sm:px-10 lg:px-[100px] md:py-[50px] not-italic flex flex-col">
      <header className="text-secFontColor  text-sm leading-[17px] tracking-widest uppercase  pb-1 font-bold">
        Table Heading
      </header>
      <div className="flex justify-between items-center border-b border-border h-11  relative ">
        <div className="flex  gap-x-[30px] h-full">
          <button
            id="All"
            className={`${
              activeTab === "All" ? "text-priFontCont" : "text-secFontColor"
            } font-medium text-sm leading-[17px]  ${
              activeTab === "All" && " border-b-2"
            } border-priFontCont h-full  px-3 `}
            onClick={(e) => setactiveTab(e.target.id)}
          >
            All
          </button>
          <button
            id="Paid"
            className={`${
              activeTab === "Paid" ? "text-priFontCont" : "text-secFontColor"
            } font-medium text-sm leading-[17px]  ${
              activeTab === "Paid" && " border-b-2"
            } border-priFontCont h-full  px-3 `}
            onClick={(e) => setactiveTab(e.target.id)}
          >
            Paid
          </button>
          <button
            id="Unpaid"
            className={`${
              activeTab === "Unpaid" ? "text-priFontCont" : "text-secFontColor"
            } font-medium text-sm leading-[17px] ${
              activeTab === "Unpaid" && " border-b-2"
            } border-priFontCont h-full  px-3 `}
            onClick={(e) => setactiveTab(e.target.id)}
          >
            Unpaid
          </button>
          <button
            id="Overdue"
            className={`${
              activeTab === "Overdue" ? "text-priFontCont" : "text-secFontColor"
            } font-medium text-sm leading-[17px] ${
              activeTab === "Overdue" && " border-b-2"
            } border-priFontCont h-full  px-3 `}
            onClick={(e) => setactiveTab(e.target.id)}
          >
            Overdue
          </button>
        </div>
        <h4 className="text-secFontColor font-medium text-sm leading-[17px]">
          Total payable amount:
          <span className=" mx-1 font-extrabold text-btnPri">$900.00</span>
          USD
        </h4>
      </div>
      <Container activeTab={activeTab} products={data} />
    </div>
  );
}
