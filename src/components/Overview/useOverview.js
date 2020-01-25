import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOverview } from "../../redux/actions";

const useOverview = props => {
  const dispatch = useDispatch();
  const overview = useSelector(state => state.overview);
  const [installData, setInstallData] = useState(null);
  const [revenueData, setRevenueData] = useState(null);

  useEffect(() => {
    dispatch(getOverview());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (overview) {
      setRevenueData({
        labels: overview.revenue.map(item => item.day),
        datasets: [
          {
            label: "revenue",
            data: overview.revenue.map(item => item.value)
          }
        ]
      });
      setInstallData({
        labels: overview.installs.map(item => item.day),
        datasets: [
          {
            label: "installs",
            data: overview.installs.map(item => item.value)
          }
        ]
      });
    }
  }, [overview]);

  return { revenueData, installData };
};

export default useOverview;
