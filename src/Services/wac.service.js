import appConfig from "../Configurations/app.config";
import Axios from "axios";

const wacService = {};

wacService.create = async (data, headers) => {
  return await Axios({
    method: "post",
    url: `${appConfig.api}wac`,
    headers,
    data,
  });
};

wacService.find = async (query, headers) => {
  return await Axios({
    method: "get",
    url: `${appConfig.api}wac?${query.page ? `&page=${query.page}` : ""}${
      query.limit ? `&limit=${query.limit}` : ""
    }`,
    headers,
  });
};

export { wacService };
