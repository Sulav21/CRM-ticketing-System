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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoic3VsYXY1QHlhaG9vLmNvbSIsImlhdCI6MTY2MzcyNTM0MSwiZXhwIjoxNjYzODExNzQxfQ.WWPvb2vsKXK2M5T8oNpe_KnnjzTPaD8_WTHS9xIP4WU",
    },
  });
};

export const loginUser = (dataObj) => {
  return apiProcessor({
    method: "post",
    url: UserURl + "/login",
    dataObj,
  });
};

export const getUser = () => {
  return apiProcessor({
    method: "get",
    url: UserURl,
    headers: {
      Authorization: sessionStorage.getItem("accessJWT"),
    },
  });
};

export const getNewAccessToken = async () => {
  const result = await apiProcessor({
    method: "get",
    url: TokenUrl,
    headers: {
      Authorization: localStorage.getItem("refreshJWT"),
    },
  });
  result.status === "success" &&
    sessionStorage.setItem("accessJWT", result.newAccessJwt);
};
