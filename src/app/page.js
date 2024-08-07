import Main from "@/components/Main/Main";
import TotalDeathes from "@/components/TotalDeathes/TotalDeathes";
import TotalInfections from "@/components/TotalInfections/TotalInfections";

const fetchTotalData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/totals?format=json`,
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
const totalData = await fetchTotalData();

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#121416] grow grid grid-cols-11 text-[#fff]">
      <TotalDeathes total={String(totalData[0].deaths)} />
      <main className="col-span-5 p-4">
        <Main data={totalData[0]} />
      </main>
      <TotalInfections
        total={String(totalData[0].confirmed - totalData[0].deaths)}
      />
    </div>
  );
}
