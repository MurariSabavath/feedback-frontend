import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const RatingChart = ({ rating, comments, totalRatings }) => {
  const [ratingData, setRatingData] = useState({ label: [], values: [] });

  useEffect(() => {
    const labelArr = Object.keys(rating).map((key) => key);
    const ratingArr = Object.keys(rating).map((key) => rating[key]);
    setRatingData({ label: labelArr, values: ratingArr });
  }, []);

  const data = {
    labels: ratingData.label,
    datasets: [
      {
        label: "Rating",
        data: ratingData.values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
      <Pie data={data} />
    </div>
  );
};

export default RatingChart;
