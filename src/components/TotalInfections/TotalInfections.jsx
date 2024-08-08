"use client";
import React from "react";

const countryList = [];
if (typeof window !== "undefined") {
  const countryList123 = JSON.parse(localStorage.getItem("country")) || [];
  countryList.push(...countryList123);
}

export default function TotalInfections({ total }) {
  const num = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="col-span-3 min-h-screen">
      <div className="h-full p-4">
        <div className="bg-[#15141B] h-full">
          <div className="py-4 bg-[#23282C] px-3 mb-2 shadow-xl">
            <span className="text-[#6459C8] uppercase font-bold">
              Total Infections
            </span>
            <p className="text-[#dadada] text-3xl font-semibold">{num}</p>
          </div>
          <ol className="h-[78vh] overflow-auto">
            {countryList.map((country, index) => (
              <li
                className="flex items-center justify-between py-3 px-2 border-b border-[#23282C] text-fontColor hover:bg-[#312F51] transition-all duration-300 cursor-pointer"
                key={index}
              >
                <div>
                  {" "}
                  <span className="text-fontColor mr-2">{index + 1}.</span>
                  {country.name}
                </div>
                <p>
                  {String(total - Math.round(Math.random() * total))
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
