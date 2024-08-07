export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Infections",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(100,89,200,0.4)",
      borderColor: "rgba(100,89,200,1)",
    },
    {
      label: "Deaths",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(255,88,97,0.4)",
      borderColor: "rgba(255,88,97,1)",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Infections and Deathes rate",
    },
  },
};
