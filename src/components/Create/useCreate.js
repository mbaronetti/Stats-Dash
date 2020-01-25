import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaigns, setNewCampaign } from "../../redux/actions";
import { Modal } from "antd";
import { v1 } from "uuid";

const useCreate = props => {
  const dispatch = useDispatch();
  const campaigns = useSelector(state => state.campaigns);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getCampaigns());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(campaigns);
    if (value.length === 0)
      return Modal.error({ content: "Please enter a Campaign name" });
    dispatch(
      setNewCampaign(...campaigns, {
        id: v1(),
        name: value,
        installs: []
      })
    );
    Modal.success({ content: "New Campaign: " + value });
  };
  return { handleChange, handleSubmit };
};

export default useCreate;
