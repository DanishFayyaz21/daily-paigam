import appConfig from "../Configurations/app.config";
import Axios from "axios";

const postService = {};

postService.create = async (data, headers) => {
  return await Axios({
    method: "post",
    url: `${appConfig.api}posts`,
    headers,
    data,
  });
};

postService.find = async (data, query, headers) => {
  return await Axios({
    method: "get",
    url: `${appConfig.api}posts?${query.id ? `&id=${query.id}` : ""}${
      query.page ? `&page=${query.page}` : ""
    }${query.limit ? `&limit=${query.limit}` : ""}`,
    headers,
    data,
  });
};

export { postService };
