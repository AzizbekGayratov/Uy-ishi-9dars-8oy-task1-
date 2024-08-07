import React from "react";
import LineChart from "../LinCart";

export default function Deaths({ data }) {
  return (
    <div className="text-center mt-8 flex flex-col justify-between">
      <div className="mb-14">
        <p className="text-error uppercase text-3xl font-bold mb-6">
          Total Deathes
        </p>
        <p className="text-[#dadada] text-7xl font-semibold ">
          {String(data.deaths).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      </div>
      <LineChart />
    </div>
  );
}
