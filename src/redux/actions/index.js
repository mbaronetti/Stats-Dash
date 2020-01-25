//ACTIONS
import * as ct from "../constants";
import { fetchData } from "../../components/Helpers";

const setOverview = data => {
  return {
    type: ct.SET_OVERVIEW,
    data
  };
};

export const getOverview = data => {
  return async dispatch => {
    const response = await fetchData(
      "http://5c3db915a9d04f0014a98a79.mockapi.io/overview"
    );
    dispatch(setOverview(response.data));
  };
};
const setCampaigns = data => {
  return {
    type: ct.SET_CAMPAIGNS,
    data
  };
};

export const setNewCampaign = (...data) => {
  return dispatch => {
    dispatch(setCampaigns(data))
  }
}

export const getCampaigns = data => {
  return async dispatch => {
    const response = await fetchData(
      "http://5c3db915a9d04f0014a98a79.mockapi.io/campaigns"
    );
    dispatch(setCampaigns(response.data));
  };
};
