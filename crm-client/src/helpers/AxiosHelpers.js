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
    if(error.message==='Request failed with status code 401'){
      localStorage.removeItem('refreshJWT')
    }
    console.log(error.message);
  }
};

export const fetchTickets = () => {
  return apiProcessor({
    method: "get",
    url: TicketUrl,
    headers: {
      Authorization:sessionStorage.getItem('accessJWT'),
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
