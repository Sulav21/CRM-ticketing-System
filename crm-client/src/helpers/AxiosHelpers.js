import axios from "axios";

const RootUrl = "http://localhost:8000/v1";
const UserURl = RootUrl + "/user";
const TokenUrl = RootUrl + "/tokens";
const TicketUrl = RootUrl + "/ticket";

const apiProcessor = async ({ method, url, dataObj, headers }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataObj,
      headers,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTickets = () => {
  return apiProcessor({
    method: "get",
    url: TicketUrl,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoic3VsYXY1QHlhaG9vLmNvbSIsImlhdCI6MTY2MzcyMDgzMiwiZXhwIjoxNjYzNzIxNzMyfQ.acrQfRgrFRmjaBqF4Hz8vU9pW_76SIQPTip79kKQiNk",
    },
  });
};
