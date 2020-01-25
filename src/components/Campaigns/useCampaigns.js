import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCampaigns } from "../../redux/actions";

const useCampaigns = props => {
  const dispatch = useDispatch();
  const campaigns = useSelector(state => state.campaigns);
  const [campaignsData, setCampaignsData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(!campaigns)
    dispatch(getCampaigns());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (campaigns) {
      setCampaignsData({
        labels: campaigns[index].installs.map(item => item.day),
        datasets: [
          {
            label: campaigns[index].name,
            data: campaigns[index].installs.map(item => item.value)
          }
        ]
      });
    }
  }, [campaigns, index]);

  const handleChange = value => {
    setIndex(value);
  };

  return { campaignsData, campaigns, handleChange, index };
};

export default useCampaigns;
