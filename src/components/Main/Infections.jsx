import React from "react";
import LineChart from "../LinCart";

export default function Infections({ data }) {
  return (
    <div className="text-center mt-8">
      <div className="mb-14">
        <p className="text-[#6459C8] uppercase text-3xl font-bold mb-6">
          Total Infections
        </p>
        <p className="text-[#dadada] text-7xl font-semibold ">
          {String(data.confirmed - data.deaths).replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}
        </p>
      </div>
      <LineChart />
    </div>
  );
}
