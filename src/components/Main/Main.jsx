"use client";
import React, { useState } from "react";
import Deaths from "./Deaths";
import Infections from "./Infections";

setTimeout(async () => {
  const countryList = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/help/countries?format=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const country = await countryList();
  console.log(country);
  localStorage.setItem("country", JSON.stringify(country));
}, 1000);

setTimeout(() => {
  window.location.reload();
}, 1500);

export default function Main({ data }) {
  const [active, setActive] = useState("deathes");
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <button
          className={`grow py-3 text-fontColor font-semibold uppercase ${
            active === "deathes" ? "bg-[#23282C]" : "bg-[#15141B]"
          }`}
          onClick={() => setActive("deathes")}
        >
          Total Deathes
        </button>
        <button
          className={`grow py-3 text-fontColor font-semibold uppercase ${
            active === "infections" ? "bg-[#23282C]" : "bg-[#15141B]"
          }`}
          onClick={() => setActive("infections")}
        >
          Total Infections
        </button>
      </div>
      {active === "deathes" && (
        <div>
          <Deaths data={data} />
        </div>
      )}
      {active === "infections" && (
        <div>
          <Infections data={data} />
        </div>
      )}
    </div>
  );
}
