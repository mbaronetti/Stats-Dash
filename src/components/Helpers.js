import axios from "axios";

export const fetchData = async (endpoint, body) => {
  const response = await axios
    .get(endpoint, body)
    .then(
      response => {
        return response;
      },
      error => {
        return error;
      }
    );
  return response;
};
