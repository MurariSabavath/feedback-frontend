import Axios from "axios";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import RatingChart from "../../components/chart";

ChartJS.register(ArcElement, Tooltip, Legend);

const MessRating = (props) => {
  const [messData, setMessData] = useState({
    breakfast: {
      comments: [],
      rating: {},
      totalreq: 0,
    },
    lunch: {
      comments: [],
      rating: {},
      totalreq: 0,
    },

    dinner: {
      comments: [],
      rating: {},
      totalreq: 0,
    },
    created: "",
    totalCount: 0,
  });

  useEffect(() => {
    setMessData(props.data);
  }, []);

  return (
    <>
      <div style={{ width: "500px" }}>
        <RatingChart
          rating={messData.breakfast.rating}
          comments={messData.breakfast.comments}
          totalRatings={messData.breakfast.totalreq}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { messId, date } = context.params;
  const messData = await Axios.get(
    `${process.env.API_URL}/feed/${messId}/${date}`,
  );

  return {
    props: { data: messData.data },
  };
}

export default MessRating;
